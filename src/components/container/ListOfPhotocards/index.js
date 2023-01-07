import React from 'react'
import { useQuery, gql } from "@apollo/client";
import { GET_PHOTOS } from "../../../hoc/withPhotos";
import { ListOfPhotocardsComponent } from "../../organisms/ListOfPhotocardsComponent";

export const ListOfPhotocards = ({ categoryId }) => {
    // in this container we fetch the data and we show it in the presentational structure that ListOfPhotocardsComponent
    // has
    const { data, loading, error } = useQuery(GET_PHOTOS, {
        variables: { categoryId }
      })
      if (loading) return 'Cargando...'
      if (error) return <pre>{error.message}</pre>
      return (
        <ListOfPhotocardsComponent data={data}/>
      )
    }
