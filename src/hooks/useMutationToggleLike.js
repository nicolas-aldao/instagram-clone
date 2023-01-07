import { useMutation, gql } from '@apollo/client';
const MUTATION_LIKE_PHOTO = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id
      liked
      likes
    }
  }
`;
export const useMutationToggleLike = () => {
  const [mutation, { loading: mutationLoading, error: mutationError }] =
    useMutation(MUTATION_LIKE_PHOTO);
  return { mutation, mutationLoading, mutationError };
};
