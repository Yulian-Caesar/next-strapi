import qs from "qs";
import { getStrapiURL } from "@/lib/utils";
// import { connection as noStore } from "next/server";

const baseUrl = getStrapiURL();

async function fetchData(url: string) {
	// noStore();
	const authToken = null; // we will implement this later getAuthToken() later
	const headers = {
		method: "GET",
		headers: {
		"Content-Type": "application/json",
		Authorization: `Bearer ${authToken}`,
		},
	};

	try {
		const response = await fetch(url, authToken ? headers : {});
		const data = await response.json();
		return data;
	} catch (error) {
    throw error;
	}
}

export async function getHomePageData() {
  const url = new URL("/api/home-page", baseUrl);
	url.search = qs.stringify({
    populate: {
      blocks: {
        on: {
          "layout.hero-section": {
            populate: {
              image: {
                fields: ["url", "alternativeText"],
              },
              link: {
                populate: true,
              },
            },
          },
          "layout.features-section": {
            populate: {
              feature: {
                populate: true,
              },
            },
          },
        },
      },
    },
  });

  return await fetchData(url.href);
}

export async function getGlobalPageData() {
  const url = new URL("/api/global", baseUrl);
  url.search = qs.stringify({
    // populate: [
    //     "header.logoText",
    //     "header.ctaButton",
    //     "footer.logoText",
    //     "footer.socialLink",
    // ],
    populate: {
      header: {
        populate: {
			logoText: true,
			ctaButton: true,
        },
      },
      footer: {
        populate: {
          	logoText: true,
          	socialLink: true,
        },
      },
    },
  });

  return await fetchData(url.href);
}

export async function getGlobalPageMetaData() {
	const url = new URL("/api/global", baseUrl);
	url.search = qs.stringify({
		fields: ["title", "description"]
	})

	return await fetchData(url.href)
}