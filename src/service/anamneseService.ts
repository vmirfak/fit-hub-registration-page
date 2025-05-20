import { AnamneseFormData } from "@/types/anamnesetypes";

const API_BASE_URL = "http://localhost:3000";

export const submitAnamnese = async (formData: AnamneseFormData) => {
  try {
    // For file uploads, we need to use FormData
    const formDataToSend = new FormData();

    // Append all simple fields
    Object.entries(formData).forEach(([key, value]) => {
      if (
        key === "fotoFrontal" ||
        key === "fotoLateral" ||
        key === "fotoCostas"
      ) {
        // Handle file arrays - append each file separately
        if (
          Array.isArray(value) &&
          value.length > 0 &&
          value[0] instanceof File
        ) {
          (value as File[]).forEach((file) => {
            formDataToSend.append(key, file);
          });
        }
      } else {
        // Convert all other values to strings
        formDataToSend.append(key, String(value));
      }
    });

    const response = await fetch(`${API_BASE_URL}/api/anamneses`, {
      method: "POST",
      body: formDataToSend,
      // Don't set Content-Type header - let the browser set it with the boundary
    });

    if (!response.ok) {
      throw new Error("Failed to submit anamnese");
    }

    return await response.json();
  } catch (error) {
    console.error("Error submitting anamnese:", error);
    throw error;
  }
};
