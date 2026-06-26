import { NextResponse } from "next/server";

export function ok<T>(data: T, init?: ResponseInit & { message?: string }) {
  return NextResponse.json(
    {
      success: true,
      data,
      ...(init?.message ? { message: init.message } : {}),
    },
    init,
  );
}

export function fail(
  message: string,
  init?: ResponseInit & { field_errors?: Record<string, string> },
) {
  return NextResponse.json(
    {
      success: false,
      message,
      ...(init?.field_errors ? { field_errors: init.field_errors } : {}),
    },
    init,
  );
}

