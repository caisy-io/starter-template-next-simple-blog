import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.redirect(
    new URL(
      `https://app.caisy.io/app/project/home?project_id=${process.env.CAISY_PROJECT_ID}&verify_template_setup=true`,
      request.url
    )
  );
}
