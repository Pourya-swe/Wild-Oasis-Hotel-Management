import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("Cabins couldn't be loaded");
  }

  return data;
}

// Note: We realize if we are in editing session by passing the cabin id
export async function createEditCabins(newCabin, id) {
  // Note: When we edit a cabin without specifying a cabin image again, the previous cabin image with the remote url stays the same, but with specifying a new image again the path of the image become relative, so we need to make remote again
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // Note: Passing the newCabin object is going to work for it has the exact name of every column in our table in subabase
  // Note: 'Insert' function on it's own does not return the newly created row immediately, so we need 'Select' and 'Single' function to make that happen
  let query = supabase.from("cabins");

  // Creating/Editing cabin
  // A) Creating
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // B) Editing
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    throw new Error("Cabins couldn't be added");
  }

  // Uploading the image

  // Guard clause
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // Delete the cabin if there was storage error
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created"
    );
  }

  return data;
}

export async function deleteCabins(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Cabins couldn't be deleted");
  }
}
