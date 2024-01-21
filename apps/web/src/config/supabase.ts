import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_KEY as string;

const supabase = createClient(
  "http://127.0.0.1:54321",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtnbHhidmpvcHZyZWd4aWFjb2VvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU4NTY2NjgsImV4cCI6MjAyMTQzMjY2OH0.nsXIr6gKCftGJaUGAH0XU9s3WkL04dcDlB_JNqUL6aY"
);

export default supabase;

// SUPABASE_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtnbHhidmpvcHZyZWd4aWFjb2VvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU4NTY2NjgsImV4cCI6MjAyMTQzMjY2OH0.nsXIr6gKCftGJaUGAH0XU9s3WkL04dcDlB_JNqUL6aY

// SUPABASE_URL = http://127.0.0.1:54321
