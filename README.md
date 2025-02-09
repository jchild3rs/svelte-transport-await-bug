# Reproduction for issue: https://github.com/sveltejs/kit/issues/13438

When using `hooks.ts` transports, if the encode/decode happens during an `{#await}` block. There is a _compiled_ JS error:

<img width="1043" alt="image" src="https://github.com/user-attachments/assets/cf56d769-1898-43ec-a6ef-ad55bb720636" />
