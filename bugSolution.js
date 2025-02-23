The solution involves making the child route path absolute by starting it with a forward slash (`/`). This clarifies that the child route parameters are independent of the parent route's parameters:

```javascript
<Route path='/parent/:parentId' element={<Parent />}>
  <Route path='/:childId' element={<Child />}/>
</Route>
```

Now, the `Child` component will correctly access the `childId` parameter, avoiding any unintended use of the `parentId`. The updated path `/parent/:parentId/:childId` will accurately capture both parameters.

By using absolute paths for child routes, you avoid parameter ambiguity and ensure that each route correctly handles its intended parameters.