import { useState } from 'react';

export default function ToggleSwitch() {
  const [enabled, setEnabled] = useState(false);

  return (
    <label className="flex items-center justify-between cursor-pointer p-4 max-w-xs">
      <span className="text-sm font-medium text-gray-900 dark:text-white pr-2">
        Dark Mode
      </span>
      <button
        type="button"
        role="switch"
        aria-checked={enabled}
        onClick={() => setEnabled(!enabled)}
        className={`
          relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent 
          transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2
          ${enabled ? 'bg-indigo-600' : 'bg-gray-200'}
        `}
      >
        <span
          className={`
            pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 
            transition duration-200 ease-in-out
            ${enabled ? 'translate-x-5' : 'translate-x-0'}
          `}
        />
      </button>
    </label>
  );
}
