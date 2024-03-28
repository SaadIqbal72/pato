<template>
  <header>
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="@/assets/images/logo.webp" alt="" class="w-100" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav">
            <!-- Use v-for to loop through an array of navbar items -->
            <li
              v-for="(item, index) in navbarItems"
              :key="index"
              class="nav-item"
              :class="{ dropdown: item.children }"
            >
              <a
                v-if="!item.children"
                class="nav-link"
                :class="{ active: item.active }"
                :href="item.href"
              >
                {{ item.text }}
              </a>
              <!-- <a
              v-else
              class="nav-link dropdown-toggle"
              :href="item.href"
              :id="'navbarDropdown_' + index"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ item.text }}
            </a>
            <ul
              v-if="item.children"
              class="dropdown-menu"
              :aria-labelledby="'navbarDropdown_' + index"
            >
              <li
                v-for="(child, childIndex) in item.children"
                :key="childIndex"
              >
                <a class="dropdown-item" :href="child.href">{{ child.text }}</a>
              </li>
            </ul> -->
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navbarItems: [
        { text: "Home", href: "/", active: true },
        { text: "Menu", href: "#" },
        { text: "Reservation", href: "#" },
        { text: "Gallery", href: "#" },
        { text: "About", href: "/about" },
        { text: "Blog", href: "#" },
        { text: "Contact", href: "#" },
        // {
        //   text: "Dropdown",
        //   children: [
        //     { text: "Action", href: "#" },
        //     { text: "Another action", href: "#" },
        //     { text: "Something else here", href: "#" },
        //   ],
        // },
      ],
    };
  },
};
</script>
