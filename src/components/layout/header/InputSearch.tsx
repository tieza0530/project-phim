import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { SearchPage } from "@/pages/search-movie";
import { useNavigate } from "react-router-dom";
import { routes } from "@/router";

export const InputSearch = () => {
  const [keySearch, setKeySearch] = useState("");
  const navigator = useNavigate();
  const formSchema = z.object({
    keySearch: z.string(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      keySearch: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (values) {
      setKeySearch(values.keySearch);
    }
  };
  useEffect(() => {
    if(keySearch){
        navigator(`/tim-kiem/${keySearch}`)
    }
  }, [keySearch])
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex">
          <FormField
            control={form.control}
            name="keySearch"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Tìm kiếm phim" {...field}  className="bg-white font-normal pr-20"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};