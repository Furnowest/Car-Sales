import React from 'react';

export const RemoveFeature = item => {
    return{
        type: 'REMOVE_ITEM',
        payLoad: item
    }
}