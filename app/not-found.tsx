import { getProps, EPageType } from "../src/services/content/getProps";
import { Page } from "../src/layouts/Page";

export default async function NofFound() {
  const resPage = await getProps({
    pageType: EPageType.NotFound,
  });

  return (
    <div>
      <Page {...resPage.Page} />
    </div>
  );
}
