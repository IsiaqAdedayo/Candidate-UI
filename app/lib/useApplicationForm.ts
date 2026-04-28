"use client";

import {
  ApiResponse,
  ApplicationFormData,
  AvailabilityOption,
  FormErrors,
  ViewState,
} from "../types";
import { useCallback, useState } from "react";
import { submitApplication } from "./api";
import { validateForm, hasErrors } from "./validation";

const defaultForm: ApplicationFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  linkedin: "",
  portfolio: "",
  position: "",
  experience: "",
  currentSalary: "",
  expectedSalary: "",
  coverLetter: "",
  skills: [],
  availability: "",
  resumeFile: null,
};

export function useApplicationForm() {
  const [form, setForm] = useState<ApplicationFormData>(defaultForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [view, setView] = useState<ViewState>("form");
  const [apiError, setApiError] = useState("");
  const [referenceId, setReferenceId] = useState("");
  const [skillInput, setSkillInput] = useState("");

  const updateField = useCallback(
    <K extends keyof ApplicationFormData>(
      key: K,
      value: ApplicationFormData[K],
    ) => {
      setForm((prev) => ({ ...prev, [key]: value }));
      if (errors[key as keyof FormErrors]) {
        setErrors((prev) => {
          const next = { ...prev };
          delete next[key as keyof FormErrors];
          return next;
        });
      }
    },
    [errors],
  );

  const addSkill = useCallback(() => {
    const trimmed = skillInput.trim();
    if (!trimmed || form.skills.includes(trimmed)) {
      setSkillInput("");
      return;
    }
    setForm((prev) => ({ ...prev, skills: [...prev.skills, trimmed] }));
    setSkillInput("");
  }, [skillInput, form.skills]);

  const removeSkill = useCallback((skill: string) => {
    setForm((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s !== skill),
    }));
  }, []);

  const setAvailability = useCallback((val: AvailabilityOption) => {
    setForm((prev) => ({ ...prev, availability: val }));
  }, []);

  const setResumeFile = useCallback((file: File | null) => {
    setForm((prev) => ({ ...prev, resumeFile: file }));
  }, []);

  const progress = (() => {
    const required: (keyof ApplicationFormData)[] = [
      "firstName",
      "lastName",
      "email",
      "position",
      "experience",
      "expectedSalary",
      "coverLetter",
    ];
    const filled = required.filter(
      (k) => String(form[k] ?? "").trim().length > 0,
    ).length;
    return Math.round((filled / required.length) * 100);
  })();

  const submit = useCallback(async () => {
    const validationErrors = validateForm(form);
    if (hasErrors(validationErrors)) {
      setErrors(validationErrors);
      return;
    }

    setView("loading");
    setApiError("");

    try {
      const result: ApiResponse = await submitApplication(form);
      setReferenceId(result.referenceId);
      setView("success");
    } catch (err: unknown) {
      setApiError(
        err instanceof Error
          ? err.message
          : "Submission failed. Please try again.",
      );
      setView("error");
    }
  }, [form]);

  const reset = useCallback(() => {
    setForm(defaultForm);
    setErrors({});
    setApiError("");
    setReferenceId("");
    setSkillInput("");
    setView("form");
  }, []);

  return {
    form,
    errors,
    view,
    apiError,
    referenceId,
    progress,
    skillInput,
    setSkillInput,
    updateField,
    addSkill,
    removeSkill,
    setAvailability,
    setResumeFile,
    submit,
    reset,
  };
}
