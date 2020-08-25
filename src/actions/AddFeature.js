import React from 'react';

export const AddFeature = item => {
    return{
        type: 'ADD_ITEM',
        payLoad: item
    }
}