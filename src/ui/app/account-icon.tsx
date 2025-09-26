'use client';

import type { ComponentProps, FC } from 'react';
import type { Address } from 'viem';
import { cn } from '@/lib/utils/shadcn';

type Props = ComponentProps<'div'> & {
  account?: Address;
};

export const AccountIcon: FC<Props> = ({ className, account, ...props }) => {
  return (
    <div
      className={cn('inline-flex size-5 overflow-hidden rounded-full bg-gray-100', className)}
      {...props}
    >
      {account != null && 'none avatar'}
    </div>
  );
};
