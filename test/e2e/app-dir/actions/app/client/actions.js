'use server'

import { redirect } from 'next/navigation'
import { headers, cookies } from 'next/headers'

export async function getHeaders() {
  console.log('accept header:', headers().get('accept'))
  cookies().set('test-cookie', Date.now())
}

export async function inc(value) {
  return value + 1
}

export async function dec(value) {
  return value - 1
}

export default async function (value) {
  console.log('this_is_sensitive_info')
  return value * 2
}

export async function redirectAction(path) {
  redirect(path)
}
