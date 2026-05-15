"use client";

import {
  FieldError,
  Input,
  Label,
  TextField,
  Select,
  ListBox,
  TextArea,
  Button,
} from "@heroui/react";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const AddDestinationPage = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const destination = Object.fromEntries(data.entries());

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URI}/destinations`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(destination),
      }
    );

    const result = await res.json();

    if (result.insertedId) {
      toast.success("Destination Added Successfully");
      router.push("/destinations");
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-emerald-50 px-4 py-14">

      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            Add Destination
          </h1>

          <p className="text-gray-500">
            Create a new travel experience for users
          </p>

        </div>

        {/* Form */}
        <form
          onSubmit={onSubmit}
          className="bg-white border border-gray-100 shadow-lg rounded-3xl p-8 space-y-8"
        >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Destination Name */}
            <div className="md:col-span-2">
              <TextField name="destinationName" isRequired>
                <Label>Destination Name</Label>
                <Input
                  placeholder="Bali Paradise"
                  className="rounded-xl"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Country */}
            <TextField name="country" isRequired>
              <Label>Country</Label>
              <Input placeholder="Indonesia" className="rounded-xl" />
              <FieldError />
            </TextField>

            {/* Category */}
            <Select name="category" isRequired className="w-full">
              <Label>Category</Label>
              <Select.Trigger className="rounded-xl">
                <Select.Value placeholder="Select category" />
                <Select.Indicator />
              </Select.Trigger>

              <Select.Popover>
                <ListBox>
                  <ListBox.Item id="Beach" textValue="Beach">Beach</ListBox.Item>
                  <ListBox.Item id="Mountain" textValue="Mountain">Mountain</ListBox.Item>
                  <ListBox.Item id="City" textValue="City">City</ListBox.Item>
                  <ListBox.Item id="Adventure" textValue="Adventure">Adventure</ListBox.Item>
                  <ListBox.Item id="Cultural" textValue="Cultural">Cultural</ListBox.Item>
                  <ListBox.Item id="Luxury" textValue="Luxury">Luxury</ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>

            {/* Price */}
            <TextField name="price" type="number" isRequired>
              <Label>Price (USD)</Label>
              <Input type="number" placeholder="1299" className="rounded-xl" />
              <FieldError />
            </TextField>

            {/* Duration */}
            <TextField name="duration" isRequired>
              <Label>Duration</Label>
              <Input
                placeholder="7 Days / 6 Nights"
                className="rounded-xl"
              />
              <FieldError />
            </TextField>

            {/* Date */}
            <div className="md:col-span-2">
              <TextField name="departureDate" type="date" isRequired>
                <Label>Departure Date</Label>
                <Input type="date" className="rounded-xl" />
                <FieldError />
              </TextField>
            </div>

            {/* Image */}
            <div className="md:col-span-2">
              <TextField name="imageUrl" isRequired>
                <Label>Image URL</Label>
                <Input
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  className="rounded-xl"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <TextField name="description" isRequired>
                <Label>Description</Label>
                <TextArea
                  placeholder="Describe the travel experience..."
                  className="rounded-xl"
                />
                <FieldError />
              </TextField>
            </div>

          </div>

          {/* Button */}
          <Button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-xl transition"
          >
            Add Travel Package
          </Button>

        </form>
      </div>
    </section>
  );
};

export default AddDestinationPage;