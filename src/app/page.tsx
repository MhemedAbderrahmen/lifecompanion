import { LatestPost } from "~/app/_components/post";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import { TopNav } from "./_components/top-nav";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "~/components/ui/sidebar";
import { AppSidebar } from "./_components/app-sidebar";
import { Separator } from "~/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";

export default async function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
    <HydrateClient>
      <main className="min-h-screen w-full">
        <SidebarProvider
          style={
            {
              "--sidebar-width": "350px",
            } as React.CSSProperties
          }
        >
          <AppSidebar />
          <SidebarInset>
            <header className="sticky top-0 flex shrink-0 items-center gap-2 border-b bg-background p-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">All Inboxes</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Inbox</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </header>
            <div className="flex w-1/3 gap-4 p-8 flex-col">
              <div>
                <p className="text-muted-foreground">🏆 Goals</p>
                <br/>
                <small>Active Goals</small>
              </div>
              <a href="#" className="flex w-full flex-col rounded-lg border bg-sidebar hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2">
                <div className="flex flex-row items-center gap-2">
                  <div className="text-xl">💻</div>
                  <div className="flex flex-col">
                    <small>Work time</small>
                    <small className="text-muted-foreground">
                      Remain: <span className="font-semibold">8 hours</span>
                    </small>
                  </div>
                </div>
              </a>
            </div>
          </SidebarInset>
        </SidebarProvider>
      </main>
    </HydrateClient>
  );
}
