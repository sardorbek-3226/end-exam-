const BASE_URL = "http://imageyukla.duckdns.org/api/images";

export async function getImages() {
  try {
    const res = await fetch(BASE_URL, {
      method: "GET",
    });
    if (!res.ok) throw new Error("Rasmlarni olishda xatolik");
    return await res.json();
  } catch (err) {
    console.error("❌ GET xatolik:", err);
    throw err;
  }
}

export async function createImage(formData) {
  try {
    const res = await fetch(`${BASE_URL}/create`, {
      method: "POST",
      body: formData, 
    });
    if (!res.ok) throw new Error("Rasm yaratishda xatolik");
    return await res.json();
  } catch (err) {
    console.error("❌ POST xatolik:", err);
    throw err;
  }
}
