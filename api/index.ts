import { makeApi, makeEndpoint, Zodios } from "@zodios/core";
import { ZodiosHooks } from "@zodios/react";
import { z } from "zod";

const user = makeEndpoint({
  alias: "user",
  method: "get",
  path: "user/:id",
  response: z.object({}),
});

const apiClient = new Zodios("baseurl", [user]);
export const apiHook = new ZodiosHooks("api", apiClient);
