'use client';

import { useApplicationForm } from "../lib/useApplicationForm";
import { PersonalInfo, RoleInfo, SkillsInput, AvailabilityPicker, FileUpload } from "./form";
import { Button } from "./ui";
import { LoadingState, SuccessState, ErrorState } from "./ui/states";


export function ApplicationForm() {
  const {
    form, errors, view, apiError, referenceId, progress,
    skillInput, setSkillInput,
    updateField, addSkill, removeSkill, setAvailability, setResumeFile,
    submit, reset,
  } = useApplicationForm();

  return (
    <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden">
      <div className="h-0.5 bg-stone-100">
        <div
          className="h-full bg-orange-500 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {view === 'loading' && <LoadingState />}

      {view === 'success' && (
        <SuccessState referenceId={referenceId} onReset={reset} />
      )}

      {view === 'error' && (
        <ErrorState message={apiError} onRetry={submit} />
      )}
      {view === 'form' && (
        <>
          <div className="px-4 md:px-8 py-6 border-b border-stone-100 flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-base">Candidate Application</h2>
              <p className="text-xs text-stone-400 mt-0.5">All information is kept confidential</p>
            </div>
            <p className="hidden sm:block text-xs text-stone-400">
              Fields marked <span className="text-orange-500">*</span> are required
            </p>
          </div>

          <div className="px-4 md:px-8 py-8 flex flex-col gap-8">
            <PersonalInfo form={form} errors={errors} onChange={updateField} />

            <hr className="border-stone-100" />

            <RoleInfo form={form} errors={errors} onChange={updateField} />

            <hr className="border-stone-100" />

            <SkillsInput
              skills={form.skills}
              skillInput={skillInput}
              setSkillInput={setSkillInput}
              addSkill={addSkill}
              removeSkill={removeSkill}
            />

            <hr className="border-stone-100" />

            <AvailabilityPicker value={form.availability} onChange={setAvailability} />

            <hr className="border-stone-100" />

            <FileUpload file={form.resumeFile} onFile={setResumeFile} />
          </div>

          <div className="px-4 md:px-8 py-5 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-stone-400 text-center sm:text-left">By submitting you agree to our privacy policy.</p>
            <Button onClick={submit} className="w-full sm:w-auto">
              Submit Application →
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
