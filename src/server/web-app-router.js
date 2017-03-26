import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from '../routes';

export default function webAppRouter () {
    return (ctx, next) => new Promise((resolve, reject) => {
        match({ routes, location: ctx.req.url }, (error, redirectLocation, renderProps) => {
            ctx.body = renderToString(<RouterContext {...renderProps}/>)
            resolve()
            return next()
        })
  })
}