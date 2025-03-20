'use server';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import postgres from 'postgres';


const sql = postgres(process.env.POSTGRES_U