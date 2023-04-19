import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard/Dashboard.vue";
import dashboardLayout from "@/layouts/dashboardLayout.vue";
import settingsLayout from "@/layouts/settingsLayout.vue";
import messageLayout from "@/layouts/messageLayout.vue";
import discussionLayout from "@/layouts/discussionLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/admin/dashboard",
    },
    {
      path: "/admin",
      name: "dashboardLayout",
      component: dashboardLayout,
      redirect: "/admin/dashboard",
      children: [
        {
          path: "dashboard",
          name: "dashboard",
          component: Dashboard,
        },
        {
          path: "profile",
          name: "profile",
          component: () => import("@/views/Profile/Profile.vue"),
        },
        {
          path: "programs",
          name: "programs",
          component: () => import("@/views/Programs/Programs.vue"),
        },
        {
          path: "tasks",
          name: "tasks",
          component: () => import("@/views/Tasks/Tasks.vue"),
        },
        {
          path: "reports",
          name: "reports",
          component: () => import("@/views/Reports/Reports.vue"),
        },
        {
          path: "mentors",
          name: "mentors",
          component: () => import("@/views/Mentors/Mentors.vue"),
        },
        {
          path: "mentor-managers",
          name: "mentor-managers",
          component: () => import("@/views/MentorManagers/MentorManagers.vue"),
        },
        {
          path: "approval-requests",
          name: "approval-requests",
          component: () => import("@/views/Approval/ApprovalRequests.vue"),
        },
        {
          path: "certificates",
          name: "certificates",
          component: () => import("@/views/Certificates/Certificates.vue"),
        },
        {
          path: "messages",
          name: "messages",
          component: messageLayout,
          redirect: () => "/admin/messages/inbox",
          children: [
            {
              path: "inbox",
              name: "inbox",
              component: () => import("@/views/Messages/Messages.vue"),
            },
            {
              path: "broadcast",
              name: "broadcast",
              component: () => import("@/views/Messages/Broadcast.vue"),
            },
          ],
        },
        {
          path: "discussion-forum",
          name: "discussion-forum",
          component: discussionLayout,
          redirect: () => "/admin/discussion-forum/discussions",
          children: [
            {
              path: "discussions",
              name: "discussions",
              component: () =>
                import("@/views/DiscussionForum/Discussions.vue"),
            },
            {
              path: "comments",
              name: "comments",
              component: () => import("@/views/DiscussionForum/Comments.vue"),
            },
          ],
        },
        {
          path: "settings",
          name: "settings",
          component: settingsLayout,
          redirect: () => "/admin/settings/general",
          children: [
            {
              path: "general",
              name: "general",
              component: () => import("@/views/Settings/General.vue"),
            },
            {
              path: "notifications",
              name: "notifications",
              component: () => import("@/views/Settings/Notifications.vue"),
            },
            {
              path: "privacy",
              name: "privacy",
              component: () => import("@/views/Settings/Privacy.vue"),
            },
            {
              path: "archive",
              name: "archive",
              component: () => import("@/views/Settings/Archive.vue"),
            },
            {
              path: "password",
              name: "password",
              component: () => import("@/views/Settings/Password.vue"),
            },
            {
              path: "FAQ",
              name: "FAQ",
              component: () => import("@/views/Settings/FAQ.vue"),
            },
            {
              path: "support",
              name: "support",
              component: () => import("@/views/Settings/Support.vue"),
            },
          ],
        },
      ],
    },
    {
      path: "/login",
      name: "loginLayout",
      component: () => import("@/layouts/authLayout.vue"),
      children: [
        {
          path: "/login",
          name: "login",
          component: () => import("@/views/Auth/Login.vue"),
        },
        {
          path: "/reset-password",
          name: "reset-password",
          component: () => import("@/views/Auth/ResetPassword.vue"),
        },
        {
          path: "/change-password",
          name: "change-password",
          component: () => import("@/views/Auth/ChangePassword.vue"),
        },
        {
          path: "/confirm-reset",
          name: "confirm-reset",
          component: () => import("@/views/Auth/AcknowledgePasswordReset.vue"),
        },
      ],
    },
  ],
});

export default router;
