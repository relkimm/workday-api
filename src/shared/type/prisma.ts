type PrismaModel = {
  id: number;
};

export type CreateData<T extends PrismaModel> = Omit<T, "id">;
