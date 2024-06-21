
// v0 by Vercel.
// https://v0.dev/t/iEb7OYCLU8j


<div class="flex flex-col items-center justify-center h-screen bg-background">
  <div class="max-w-md w-full space-y-6">
    <div class="text-center">
      <h1 class="text-3xl font-bold">AI Text Generation</h1>
      <p class="text-muted-foreground">Share your thoughts with Dolly and see what she generates.</p>
    </div>
    <div class="relative">
      <textarea
        class="flex min-h-[80px] bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full rounded-xl border border-muted px-4 py-3 pr-16 focus:outline-none focus:ring-2 focus:ring-primary"
        placeholder="Enter your text here..."
        rows="3"
      ></textarea>
      <button
        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 absolute top-1/2 right-4 -translate-y-1/2"
        type="submit"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-5 h-5"
        >
          <path d="m22 2-7 20-4-9-9-4Z"></path>
          <path d="M22 2 11 13"></path>
        </svg>
      </button>
    </div>
    <div class="bg-card rounded-xl p-6 shadow-sm">
      <p class="text-muted-foreground">Dolly's response will be displayed here.</p>
    </div>
  </div>
</div>