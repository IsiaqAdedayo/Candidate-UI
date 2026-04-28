'use client';

import { FormField, Input, Select, Textarea } from "../ui";
import { ApplicationFormData, AvailabilityOption, FormErrors } from "../../types";

interface PersonalInfoProps {
  form: ApplicationFormData;
  errors: FormErrors;
  onChange: <K extends keyof ApplicationFormData>(key: K, value: ApplicationFormData[K]) => void;
}

export function PersonalInfo({ form, errors, onChange }: PersonalInfoProps) {
  return (
    <section>
      <p className="text-[11px] font-semibold tracking-widest text-stone-400 uppercase mb-4">
        Personal Information
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label="First Name" required error={errors.firstName}>
          <Input
            placeholder="John"
            value={form.firstName}
            onChange={(e) => onChange('firstName', e.target.value)}
            error={!!errors.firstName}
          />
        </FormField>

        <FormField label="Last Name" required error={errors.lastName}>
          <Input
            placeholder="Doe"
            value={form.lastName}
            onChange={(e) => onChange('lastName', e.target.value)}
            error={!!errors.lastName}
          />
        </FormField>

        <FormField label="Email Address" required error={errors.email}>
          <Input
            type="email"
            placeholder="john@example.com"
            value={form.email}
            onChange={(e) => onChange('email', e.target.value)}
            error={!!errors.email}
          />
        </FormField>

        <FormField label="Phone Number">
          <Input
            type="tel"
            placeholder="+234 800 000 0000"
            value={form.phone}
            onChange={(e) => onChange('phone', e.target.value)}
          />
        </FormField>

        <FormField label="LinkedIn Profile">
          <Input
            type="url"
            placeholder="https://linkedin.com/in/..."
            value={form.linkedin}
            onChange={(e) => onChange('linkedin', e.target.value)}
          />
        </FormField>

        <FormField label="Portfolio / Website">
          <Input
            type="url"
            placeholder="https://..."
            value={form.portfolio}
            onChange={(e) => onChange('portfolio', e.target.value)}
          />
        </FormField>
      </div>
    </section>
  );
}

interface RoleInfoProps {
  form: ApplicationFormData;
  errors: FormErrors;
  onChange: <K extends keyof ApplicationFormData>(key: K, value: ApplicationFormData[K]) => void;
}

export function RoleInfo({ form, errors, onChange }: RoleInfoProps) {
  return (
    <section>
      <p className="text-[11px] font-semibold tracking-widest text-stone-400 uppercase mb-4">
        Role & Experience
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField
          label="Position Applying For"
          required
          error={errors.position}
        >
          <Select
            value={form.position}
            onChange={(e) => onChange("position", e.target.value)}
            error={!!errors.position}
          >
            <option value="">Select a role...</option>
            <option>Senior Product Designer</option>
            <option>Frontend Engineer</option>
            <option>Backend Engineer</option>
            <option>Growth Marketing Lead</option>
            <option>Other</option>
          </Select>
        </FormField>

        <FormField
          label="Years of Experience"
          required
          error={errors.experience}
        >
          <Select
            value={form.experience}
            onChange={(e) => onChange("experience", e.target.value)}
            error={!!errors.experience}
          >
            <option value="">Select range...</option>
            <option>0–1 years</option>
            <option>2–3 years</option>
            <option>4–6 years</option>
            <option>7–10 years</option>
            <option>10+ years</option>
          </Select>
        </FormField>

        <FormField label="Current Salary (Optional)">
          <Input
            placeholder="e.g. ₦80,000 / year"
            value={form.currentSalary}
            onChange={(e) => onChange("currentSalary", e.target.value)}
          />
        </FormField>

        <FormField
          label="Expected Salary"
          required
          error={errors.expectedSalary}
        >
          <Input
            placeholder="e.g. ₦100,000 / year"
            value={form.expectedSalary}
            onChange={(e) => onChange("expectedSalary", e.target.value)}
            error={!!errors.expectedSalary}
          />
        </FormField>

        <FormField
          label="Cover Letter / Why us?"
          required
          error={errors.coverLetter}
          className="sm:col-span-2"
        >
          <Textarea
            placeholder="Tell us about yourself and why you're excited about this opportunity..."
            value={form.coverLetter}
            onChange={(e) => onChange("coverLetter", e.target.value)}
            error={!!errors.coverLetter}
            rows={5}
          />
        </FormField>
      </div>
    </section>
  );
}

interface SkillsInputProps {
  skills: string[];
  skillInput: string;
  setSkillInput: (val: string) => void;
  addSkill: () => void;
  removeSkill: (skill: string) => void;
}

export function SkillsInput({ skills, skillInput, setSkillInput, addSkill, removeSkill }: SkillsInputProps) {
  return (
    <section>
      <p className="text-[11px] font-semibold tracking-widest text-stone-400 uppercase mb-4">Skills</p>
      <div className="flex flex-col sm:flex-row gap-2">
        <Input
          placeholder="Add a skill (e.g. React, Figma...)"
          value={skillInput}
          onChange={(e) => setSkillInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addSkill(); } }}
        />
        <button
          type="button"
          onClick={addSkill}
          className="px-4 py-2.5 text-sm font-medium border border-stone-200 rounded-lg bg-stone-50 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all whitespace-nowrap"
        >
          + Add
        </button>
      </div>
      {skills.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="flex items-center gap-1.5 bg-orange-50 text-orange-700 text-xs font-medium pl-3 pr-2 py-1 rounded-full"
            >
              {skill}
              <button
                type="button"
                onClick={() => removeSkill(skill)}
                className="text-orange-400 hover:text-orange-700 text-base leading-none"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}
    </section>
  );
}

const OPTIONS: AvailabilityOption[] = ['Immediately', '2 Weeks', '1 Month', '3 Months', 'Negotiable'];

interface AvailabilityPickerProps {
  value: AvailabilityOption;
  onChange: (val: AvailabilityOption) => void;
}

export function AvailabilityPicker({ value, onChange }: AvailabilityPickerProps) {
  return (
    <section>
      <p className="text-[11px] font-semibold tracking-widest text-stone-400 uppercase mb-4">Availability</p>
      <div className="flex flex-wrap gap-2">
        {OPTIONS.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={`px-4 py-1.5 rounded-full text-sm border transition-all whitespace-nowrap cursor-pointer ${
              value === opt
                ? 'bg-stone-900 text-white border-stone-900 font-medium'
                : 'bg-stone-50 text-stone-500 border-stone-200 hover:border-stone-400'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </section>
  );
}

interface FileUploadProps {
  file: File | null;
  onFile: (file: File | null) => void;
}

export function FileUpload({ file, onFile }: FileUploadProps) {
  return (
    <section>
      <p className="text-[11px] font-semibold tracking-widest text-stone-400 uppercase mb-4">Resume / CV</p>
      <label className="relative flex flex-col items-center justify-center border-2 border-dashed border-stone-200 rounded-xl p-8 cursor-pointer hover:border-stone-400 hover:bg-stone-50 transition-all bg-stone-50/50">
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          className="absolute inset-0 opacity-0 cursor-pointer"
          onChange={(e) => onFile(e.target.files?.[0] ?? null)}
        />
        <span className="text-3xl mb-2">📎</span>
        <p className="text-sm font-medium text-stone-700">
          {file ? file.name : 'Drop your resume here or click to browse'}
        </p>
        <p className="text-xs text-stone-400 mt-1">PDF, DOC, DOCX — max 5MB</p>
        {file && (
          <p className="text-xs text-green-600 font-medium mt-2">✓ File selected</p>
        )}
      </label>
    </section>
  );
}
