// api/supabase.js
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,  // 서버 환경변수 (비공개)
  process.env.NEXT_PUBLIC_SUPABASE_ANON // 서버 전용 키
);

export default async function handler(req, res) {
  try {
    const { data, error } = await supabase.from('test').select('*');
    if (error) {
      console.error("Supabase error:", error);
      return res.status(500).json({ error: error.message });
    }
    res.status(200).json(data);
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
}