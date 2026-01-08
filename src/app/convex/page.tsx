"use client";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Button } from "@/components/ui/button";

const ConvexPage = () => {
  const projects = useQuery(api.projects.get);
  const createProject = useMutation(api.projects.create);

  const isLoading = projects === undefined;

  return (
    <div className="flex flex-col gap-2 p-4">
      <Button
        onClick={() =>
          createProject({
            name: "Dalpat Rathore456",
          })
        }
      >
        Add New Project
      </Button>

      <div className="">
        {isLoading ? (
          <p>Loading projects...</p>
        ) : projects.length === 0 ? (
          <p>No projects found. Create your first project!</p>
        ) : (
          projects?.map(project => (
            <div className="border rounded p-2" key={project._id}>
              <p>{project.name}</p>
              <p>{project.ownerId}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ConvexPage;
