import React from "react";
import { useForm } from "react-hook-form";
import DatePicker from 'react-datepicker';

const MovieForm = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Movie name */}
      <input
        type="text"
        {...register("movieName", { required: true })}
        placeholder="Movie Name"
        className="input input-bordered input-accent w-full max-w-xs"
      />
      {errors?.movieName && <span>This field is required</span>}

      {/* Plot */}
      <textarea
        {...register("plot", { required: true })}
        placeholder="Plot"
        className="textarea textarea-accent" 
      />
      {errors?.plot && <span>This field is required</span>}

      {/* Directed by */}
      <input
        type="text"
        {...register("directedBy", { required: true })}
        placeholder="Directed by"
        className="input input-bordered input-accent w-full max-w-xs"
      />
      {errors?.directedBy && <span>This field is required</span>}

      {/* Release Year */}
      <div>
            <label htmlFor="releaseDate" className="block text-gray-700 font-bold mb-2">
              Release Date
            </label>
            <Datepicker
              selectedDate={selectedDate}
              onChange={(date) => setSelectedDate(date)}
            />
            {errors?.releaseDate && <span className="text-red-500 text-sm mt-1">This field is required</span>}
          </div>

      {/* Language */}
      <select
        {...register("language", { required: true })}
        defaultValue="english" // Use defaultValue instead of defaultChecked
        className="input input-bordered input-accent w-full max-w-xs"
      >
        <option value="english">English</option>
        <option value="spanish">Spanish</option>
        <option value="french">French</option>
        {/* Add more language options as needed */}
      </select>
      {errors?.language && <span>This field is required</span>}

      {/* Country */}
      <input
        type="text"
        {...register("country", { required: true })}
        placeholder="Country"
        className="input input-bordered input-accent w-full max-w-xs"
      />
      {errors?.country && <span>This field is required</span>}

      {/* Star cast (as an array) */}
      <input
        type="text"
        {...register("starCast", { required: true })}
        placeholder="Star Cast (Comma-separated)"
        className="input input-bordered input-accent w-full max-w-xs"
      />
      {errors?.starCast && <span>This field is required</span>}

      {/* IMDB rating */}
      <input
        type="number"
        step="0.1"
        {...register("imdbRating", { required: true })}
        placeholder="IMDB Rating"
        className="input input-bordered input-accent w-full max-w-xs"
      />
      {errors?.imdbRating && <span>This field is required</span>}

      {/* Poster */}
      <input
        type="text"
        {...register("poster", { required: true })}
        placeholder="Poster URL"
        className="input input-bordered input-accent w-full max-w-xs"
      />
      {errors?.poster && <span>This field is required</span>}

      {/* Download link */}
      <input
        type="text"
        {...register("downloadLink", { required: true })}
        placeholder="Download Link"
        className="input input-bordered input-accent w-full max-w-xs"
      />
      {errors?.downloadLink && <span>This field is required</span>}

      {/* Screen Short */}
      <input
        type="text"
        {...register("screenShort", { required: true })}
        placeholder="Screen Short URL"
        className="input input-bordered input-accent w-full max-w-xs"
      />
      {errors?.screenShort && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
};

export default MovieForm;
