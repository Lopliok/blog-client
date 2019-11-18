import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type AuthPayload = {
   __typename?: 'AuthPayload',
  id: Scalars['ID'],
  email: Scalars['String'],
};

export type LoginInput = {
  email: Scalars['String'],
  password: Scalars['String'],
};

export type Mutation = {
   __typename?: 'Mutation',
  signup: AuthPayload,
  login: AuthPayload,
  createPost: Post,
};


export type MutationSignupArgs = {
  signUpInput?: Maybe<SignUpInput>
};


export type MutationLoginArgs = {
  loginInput?: Maybe<LoginInput>
};


export type MutationCreatePostArgs = {
  postInput?: Maybe<PostInput>
};

export type Post = {
   __typename?: 'Post',
  id: Scalars['ID'],
  title: Scalars['String'],
  body?: Maybe<Scalars['String']>,
  author: User,
};

export type PostInput = {
  title: Scalars['String'],
  body?: Maybe<Scalars['String']>,
};

export type Query = {
   __typename?: 'Query',
  post: Post,
  posts: Array<Post>,
  myPosts: Array<Post>,
};


export type QueryPostArgs = {
  id: Scalars['ID']
};

export type SignUpInput = {
  email: Scalars['String'],
  password: Scalars['String'],
};

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  email: Scalars['String'],
  post: Array<Post>,
  createdAt: Scalars['String'],
  updatedAt: Scalars['String'],
};

export type LoginUserMutationVariables = {
  loginInput?: Maybe<LoginInput>
};


export type LoginUserMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'AuthPayload' }
    & Pick<AuthPayload, 'email' | 'id'>
  ) }
);


export const LoginUserDocument = gql`
    mutation loginUser($loginInput: LoginInput) {
  login(loginInput: $loginInput) {
    email
    id
  }
}
    `;
export type LoginUserMutationFn = ApolloReactCommon.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;
export type LoginUserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LoginUserMutation, LoginUserMutationVariables>, 'mutation'>;

    export const LoginUserComponent = (props: LoginUserComponentProps) => (
      <ApolloReactComponents.Mutation<LoginUserMutation, LoginUserMutationVariables> mutation={LoginUserDocument} {...props} />
    );
    
export type LoginUserProps<TChildProps = {}> = ApolloReactHoc.MutateProps<LoginUserMutation, LoginUserMutationVariables> & TChildProps;
export function withLoginUser<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LoginUserMutation,
  LoginUserMutationVariables,
  LoginUserProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, LoginUserMutation, LoginUserMutationVariables, LoginUserProps<TChildProps>>(LoginUserDocument, {
      alias: 'loginUser',
      ...operationOptions
    });
};
export type LoginUserMutationResult = ApolloReactCommon.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;