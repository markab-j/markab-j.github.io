export type PostFilterOption = {
  page: number;
  categories?: string[];
  tags?: string[];
};

export type PostFilter = Required<PostFilterOption>;
