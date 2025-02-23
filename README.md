# React Router v6 Nested Route Parameter Conflict

This repository demonstrates a common issue in React Router v6 involving nested routes and parameters.  The problem occurs when a child route's parameters are unintentionally combined with those of the parent route, leading to incorrect data access.

The `bug.js` file shows the problematic code, while `bugSolution.js` demonstrates the corrected implementation.

## Problem

When nesting routes with parameters, the child route's parameters are relative to the parent. If not defined carefully, the child route might inherit the parent's parameters incorrectly.

## Solution

To resolve this, ensure that child route paths begin with a forward slash (`/`). This makes the path absolute within the parent route, preventing parameter conflicts.