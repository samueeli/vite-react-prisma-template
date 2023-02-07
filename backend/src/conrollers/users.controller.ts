import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Get all
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);

    await prisma.$disconnect();
  } catch (error) {
    console.error(error);
  }
};

// Get single
export const getSingleUser = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: req.params.id } });
    res.status(200).json(user);
    await prisma.$disconnect();
  } catch (error) {
    console.error(error);
  }
};

// Create a new
export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.create({
      data: req.body,
    });
    res.status(201).json(user);

    await prisma.$disconnect();
  } catch (error) {
    console.error(error);
  }
};

// Update single
export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.update({
      where: { id: req.params.id },
      data: req.body,
    });
    res.status(200).json({ msg: 'User upated', user });
    await prisma.$disconnect();
  } catch (error) {
    console.error(error);
  }
};

// Delete single
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.delete({
      where: { id: req.params.id },
    });
    res.status(200).json({ msg: 'User deleted' });
    await prisma.$disconnect();
  } catch (error) {
    console.error(error);
  }
};
