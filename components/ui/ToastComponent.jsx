import { Icons } from '@/components/Icons';
import { cn } from '@/lib/utils';

import React from 'react';
import hotToast, { Toaster as HotToaster } from 'react-hot-toast';

export const Toaster = HotToaster;

export function ToastComponent({ visible, className, ...props }) {
  return (
    <div
      className={cn(
        'min-h-16 mb-2 flex w-[350px] flex-col items-start gap-1 rounded-md bg-white px-6 py-4 shadow-lg',
        visible && 'animate-in slide-in-from-bottom-5',
        className
      )}
      {...props}
    />
  );
}

export function ToastIcon({ name, className, ...props }) {
  const Icon = Icons[name];

  if (!Icon) {
    return null;
  }

  return (
    <div className='flex h-20 w-20 items-center justify-center rounded-full bg-slate-100'>
      <Icon className={cn('h-10 w-10', className)} {...props} />
    </div>
  );
}

export function ToastTitle({ className, ...props }) {
  return <p className={cn('text-sm font-medium', className)} {...props} />;
}

export function ToastDescription({ className, ...props }) {
  return <p className={cn('text-sm opacity-80', className)} {...props} />;
}

export function toast(opts) {
  const { title, message, type = 'default', duration = 3000 } = opts;

  return hotToast.custom(
    ({ visible }) => (
      <ToastComponent
        visible={visible}
        className={cn({
          'bg-red-600 text-white': type === 'error',
          'bg-black text-white': type === 'success',
        })}
      >
        <ToastTitle>{title}</ToastTitle>
        {message && <ToastDescription>{message}</ToastDescription>}
      </ToastComponent>
    ),
    { duration }
  );
}
