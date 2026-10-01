import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Semua field wajib diisi" },
        { status: 400 }
      );
    }

    // Di sini bisa simpan ke database (MongoDB, PostgreSQL, dll)
    console.log("📩 Pesan baru:", { name, email, message });

    return NextResponse.json({
      success: true,
      message: "Pesan berhasil diterima",
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}