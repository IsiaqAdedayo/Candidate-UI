import { Skeleton, Button } from ".";


export function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center py-12 md:py-20 px-4 md:px-8 text-center min-h-[400px]">
      <div className="flex flex-col items-center gap-4 w-full max-w-xs">
        <Skeleton className="w-16 h-16 rounded-full" />
        <Skeleton className="w-52 h-6" />
        <Skeleton className="w-40 h-4" />
        <Skeleton className="w-48 h-4" />
        <p className="text-sm text-stone-400 mt-4 animate-pulse">
          Submitting your application...
        </p>
      </div>
    </div>
  );
}

interface SuccessStateProps {
  referenceId: string;
  onReset: () => void;
}

export function SuccessState({ referenceId, onReset }: SuccessStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 md:py-20 px-4 md:px-8 text-center min-h-[400px]">
      <div
        className="w-18 h-18 rounded-full bg-green-50 border-2 border-green-500 flex items-center justify-center text-3xl mb-5"
        style={{ width: 72, height: 72, animation: 'pop 0.4s cubic-bezier(0.34,1.56,0.64,1)' }}
      >
        ✓
      </div>
      <h2 className="font-serif text-2xl mb-2">Application Submitted!</h2>
      <p className="text-sm text-stone-500 leading-relaxed max-w-xs mb-4">
        Thanks for applying. Our team will review your application and reach out within 3 business days.
      </p>
      <code className="text-xs text-stone-500 bg-stone-100 border border-stone-200 px-3 py-1.5 rounded-md font-mono">
        REF: #{referenceId}
      </code>
      <Button variant="secondary" className="mt-6" onClick={onReset}>
        Submit Another Application
      </Button>
    </div>
  );
}

interface ErrorStateProps {
  message: string;
  onRetry: () => void;
}

export function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 md:py-20 px-4 md:px-8 text-center min-h-[400px]">
      <div
        className="w-18 h-18 rounded-full bg-red-50 border-2 border-red-400 flex items-center justify-center text-3xl mb-5"
        style={{ width: 72, height: 72 }}
      >
        ✕
      </div>
      <h2 className="font-serif text-2xl mb-2">Something went wrong</h2>
      <p className="text-sm text-stone-500 leading-relaxed max-w-xs mb-2">{message}</p>
      <p className="text-xs text-stone-400 mb-6">Your form data has been preserved.</p>
      <Button onClick={onRetry}>Try Again</Button>
    </div>
  );
}

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-8 text-center min-h-[400px]">
      <span className="text-5xl mb-4">📭</span>
      <h2 className="font-serif text-2xl mb-2">No positions available</h2>
      <p className="text-sm text-stone-500 leading-relaxed max-w-xs">
        We&apos;re not hiring at the moment. Check back soon or follow us for updates.
      </p>
    </div>
  );
}
