## 1. How long did you spend on the coding test?
I spent about 5 hours on this coding test. This time, almost by its entirety, was spent towards a design for the task management application, implemented features such as search and filter, categorized tasks by priority and status, and added basic functions such as edit, delete, and completion status.


## 2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
Among the new features of improving JavaScript, which is known as ES2022, is Array.prototype.at(). Its implementation directly accesses elements at both positive and negative indices so there is no explicit calculation of the length of the array. It makes the requirement of fetching the last element or some indexed access more readable.

### Code Snippet
Here’s a sample implementation of `at()` in a helper function within the task management app to retrieve the last added task:

```javascript
const tasks = ["Task1", "Task2", "Task3"];

// Using .at() to get the last element
const lastTask = tasks.at(-1);
console.log("Last task:", lastTask); // Output: "Last task: Task3"
```

## 3. How would you track down a performance issue in production? Have you ever had to do this?

I can trace performance issues in production with these steps:

Identify performance bottlenecks through application performance monitoring using tools like **New Relic**, **DataDog**, or **AppDynamics** to exhaustively detail an analysis for total application performance.
- **Log Reviewing**: Review error logs and access logs for any unusual behavior or errors.
- **Profiling and Tracing**: Employ instruments such as **Chrome DevTools** for frontend analysis and **Node.js** performance hooks for backend evaluation, thereby recording CPU and memory utilization.
- **Benchmarking**: Establish benchmarks on critical parts of the application and understand how they behave under load. - **Caching and Optimization**: Cache or optimize those functions or processes that can be optimized by caching, lazy loading, or debouncing/throttling calls where applicable.

### Example:

I once faced a critical issue in a production environment in which user load was increased significantly, resulting in the response getting delayed. Through the profiling step by enabling profiling and analyzing logs, an inefficient database query was identified and optimized which lowered the problem by 40%.

## 4. If you had more time, what additional features or improvements would you consider adding to the task management application?
With more time, the changes I would make include

**Local Storage Integration**: Sync tasks to local storage and keep data even after session changes.
Provide user authentication so that multiple users can manage their own tasks.
- **Advanced Sorting and Filtering**: Enhance filters to allow sorting by due date, priority, and customizable filter criteria.
- **Collaborative capability**: Multiple users should be able to collaborate on a number of tasks-such shared lists of team tasks.
- **Reminders and Notifications**: Include automated reminders on upcoming and overdue tasks. - **Progress Tracking**: Implement a progress tracker for tasks that include subtasks, with completion status and target dates.