'use client';

import type { ComponentProps, FC } from 'react';
import Link from 'next/link';
import { appName } from '@/configs/app';
import { cn } from '@/lib/utils/shadcn';
import { Connect } from './connect';
import { SwitchChain } from './switch-chain';
import { SwitchTheme } from './switch-theme';

export const Header: FC<ComponentProps<'div'>> = ({ className, ...props }) => {
  return (
    <div
      className={cn('container mx-auto flex h-20 items-center justify-between', className)}
      {...props}
    >
      <Link href={'/'} className="text-2xl hover:underline">
        {appName}
      </Link>

      <div className="flex space-x-4">
        <SwitchChain />
        <Connect />
        <SwitchTheme />
      </div>
    </div>
  );
};
