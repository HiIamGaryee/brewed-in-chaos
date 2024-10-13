import React, { useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Card,
  TextField,
  Button,
  Grid,
  Stack,
} from "@mui/material";
import Layout from "../../Layout";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {
  getProductList,
  postProductList,
  ProductListParams,
} from "../../api/admin";
import { useAppMutation } from "../../hooks/useAppMutation";
import { useQuery } from "@tanstack/react-query";

const bestSellerList = [
  {
    name: "Sumatra Mandheling",
    code: "SM",
  },
  {
    name: "Colombian Supremo",
    code: "CS",
  },
  {
    name: "Jamaican Blue Mountain",
    code: "JBM",
  },
  {
    name: "Kenyan AA",
    code: "KAA",
  },
];

const ProductListPage = () => {
  const validationSchema = Yup.object({
    code: Yup.string().required("Email is required"),
    name: Yup.string().required("name is required"),
    image: Yup.string(),
    price: Yup.string().required("price is required"),
    acidity: Yup.string(),
    roast: Yup.string(),
    processing: Yup.string(),
    description: Yup.string().required("description is required"),
    category: Yup.string().required("category is required"),
    promo: Yup.string(),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ProductListParams>({
    resolver: yupResolver(validationSchema),
  });

  // const { data: bestSellerList } = useQuery({
  //   queryKey: ["getProductList", 10, 0],
  //   queryFn: () => getProductList(10, 0),
  // });

  const { mutate, reset } = useAppMutation(postProductList, {
    onSuccess: () => {
      reset();
    },
  });

  const onSubmit = (data: ProductListParams) => {
    mutate(data);
  };

  return (
    <Layout>
      <Box sx={{ p: 4 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
          }}
        >
          <Typography variant="h4" sx={{ mb: 2 }}>
            Admin Product List
          </Typography>
        </Box>
        <Grid container>
          <Grid item xs={12} md={8}>
            <TableContainer component={Card}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ minWidth: "200px" }}>Name</TableCell>
                    <TableCell>Code</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell sx={{ minWidth: "150px" }}>Price</TableCell>
                    <TableCell sx={{ minWidth: "200px" }}>Type</TableCell>
                    <TableCell>Description</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {bestSellerList.map((product: any, index: number) => (
                    <TableRow key={product.code}>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ minWidth: "200px" }}
                      >
                        {index + 1}. {product.name}
                      </TableCell>
                      <TableCell>{product.code}</TableCell>
                      <TableCell>{product.category}</TableCell>

                      <TableCell sx={{ minWidth: "150px" }}>
                        <Box>{product.price} </Box>
                        <Box>Promo: {product.promo} </Box>
                      </TableCell>
                      <TableCell sx={{ minWidth: "200px" }}>
                        <Box>Acidity: {product.acidity}</Box>
                        <Box>Roast: {product.roast}</Box>
                        <Box>Processing: {product.processing}</Box>
                      </TableCell>
                      <TableCell>{product.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={12} md={4} p={4}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={4}>
                <Typography variant="h6">Add Product</Typography>{" "}
                <TextField
                  {...register("name")}
                  label="Name"
                  variant="filled"
                  fullWidth
                  sx={{ bgcolor: "light.main" }}
                  helperText={errors.name?.message}
                />
                <TextField
                  {...register("code")}
                  label="Code"
                  variant="filled"
                  fullWidth
                  sx={{ bgcolor: "light.main" }}
                  helperText={errors.code?.message}
                />
                <TextField
                  {...register("category")}
                  label="Category"
                  variant="filled"
                  fullWidth
                  sx={{ bgcolor: "light.main" }}
                  helperText={errors.category?.message}
                />
                <TextField
                  {...register("price")}
                  label="Price"
                  variant="filled"
                  fullWidth
                  sx={{ bgcolor: "light.main" }}
                  helperText={errors.price?.message}
                />
                <TextField
                  {...register("promo")}
                  label="Promo"
                  variant="filled"
                  fullWidth
                  sx={{ bgcolor: "light.main" }}
                  helperText={errors.promo?.message}
                />
                <TextField
                  {...register("acidity")}
                  label="Acidity"
                  variant="filled"
                  fullWidth
                  sx={{ bgcolor: "light.main" }}
                  helperText={errors.acidity?.message}
                />
                <TextField
                  {...register("roast")}
                  label="Roast"
                  variant="filled"
                  fullWidth
                  sx={{ bgcolor: "light.main" }}
                  helperText={errors.roast?.message}
                />
                <TextField
                  {...register("processing")}
                  label="Processing"
                  variant="filled"
                  fullWidth
                  sx={{ bgcolor: "light.main" }}
                  helperText={errors.processing?.message}
                />
                <TextField
                  {...register("description")}
                  label="Description"
                  variant="filled"
                  fullWidth
                  sx={{ bgcolor: "light.main" }}
                  helperText={errors.description?.message}
                />
                <Button sx={{ mt: 2 }} type="submit">
                  Add
                </Button>
              </Stack>
            </form>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default ProductListPage;
