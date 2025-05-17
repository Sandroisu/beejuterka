'use client';

import { rubik } from '@/app/ui/fonts';
import { useActionState } from 'react';
import { useSearchParams } from 'next/navigation';
import { requestSignIn, SignInState } from '@/lib/actions/request-sign-in';
import Link from "next/link"