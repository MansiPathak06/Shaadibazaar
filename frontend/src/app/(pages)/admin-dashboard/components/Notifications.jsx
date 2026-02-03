// src/app/(pages)/admin-dashboard/components/Notifications.jsx
"use client";

import { CheckCircle, XCircle } from 'lucide-react';

export default function Notifications({ error, success }) {
  if (!error && !success) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 animate-slide-in">
      {/* Error Notification */}
      {error && (
        <div className="bg-linear-to-r from-red-50 to-red-100 border-l-4 border-red-500 p-4 rounded-xl shadow-lg mb-4">
          <div className="flex items-center">
            <XCircle className="w-5 h-5 text-red-500 mr-3 shrink-0" />
            <p className="text-red-700 font-medium">{error}</p>
          </div>
        </div>
      )}

      {/* Success Notification */}
      {success && (
        <div className="bg-linear-to-r from-green-50 to-emerald-100 border-l-4 border-green-500 p-4 rounded-xl shadow-lg">
          <div className="flex items-center">
            <CheckCircle className="w-5 h-5 text-green-500 mr-3 shrink-0" />
            <p className="text-green-700 font-medium">{success}</p>
          </div>
        </div>
      )}
    </div>
  );
}
