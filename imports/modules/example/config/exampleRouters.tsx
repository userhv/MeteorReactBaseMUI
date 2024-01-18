import React from 'react';
import ExampleContainer from '../ui/exampleContainer';
import { Recurso } from './Recursos';
import { IRoute } from '/imports/modules/modulesTypings';
import { ITemplateAppBar } from '/imports/ui/layouts/templates/templateAppBar/templateAppBar';

export const exampleRouterList: (IRoute | null)[] = [
    {
        path: '/example/:screenState/:exampleId',
        component: ExampleContainer,
        resources: [Recurso.EXAMPLE_VIEW],
    },
    {
        path: '/example/:screenState',
        component: ExampleContainer,
        resources: [Recurso.EXAMPLE_CREATE],
    },
    {
        path: '/example',
        component: ExampleContainer,
        resources: [Recurso.EXAMPLE_VIEW],
    },
];
