
```
data-ui-symphony-next-js
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     └─ heads
│  │        └─ master
│  ├─ objects
│  │  ├─ 00
│  │  │  └─ 4145cddf3f9db91b57b9cb596683c8eb420862
│  │  ├─ 10
│  │  │  └─ 9807be0f73749162de63805d55dd3b669c248d
│  │  ├─ 1a
│  │  │  └─ 69fd2a450afc3bf47e08b22c149190df0ffdb4
│  │  ├─ 20
│  │  │  └─ c68e66b93dc3efdf8854c8ae0d9af507cf7414
│  │  ├─ 31
│  │  │  └─ 414e6d508f5583c3cfe0c2af05d60ee50a9841
│  │  ├─ 3e
│  │  │  └─ ee0141abe634fab81de261c7133991b5a56a17
│  │  ├─ 51
│  │  │  └─ 74b28c565c285e3e312ec5178be64fbeca8398
│  │  ├─ 56
│  │  │  └─ 7f17b0d7c7fb662c16d4357dd74830caf2dccb
│  │  ├─ 5e
│  │  │  └─ f6a520780202a1d6addd833d800ccb1ecac0bb
│  │  ├─ 6b
│  │  │  └─ 717ad346d3dff8914e9545038c799226d59c89
│  │  ├─ 71
│  │  │  └─ 8d6fea4835ec2d246af9800eddb7ffb276240c
│  │  ├─ 77
│  │  │  └─ 053960334e2e34dc584dea8019925c3b4ccca9
│  │  ├─ 7e
│  │  │  └─ b6934ee86419bc78be49ec08f9b1b82856bd2c
│  │  ├─ 85
│  │  │  └─ b98d723b76e35a5cf682bfd0fb02c997b5c446
│  │  ├─ b2
│  │  │  └─ b2a44f6ebc70c450043c05a002e7a93ba5d651
│  │  ├─ c1
│  │  │  ├─ 334095f876a408c10f2357faaced969ec090ab
│  │  │  ├─ 7629e530470bada066d4ba039d860483586aea
│  │  │  └─ 937fcd18fedf183a4da41e3bb852ef82832449
│  │  ├─ c8
│  │  │  ├─ 5fb67c463f20d1ee449b0ffee725a61dfb9259
│  │  │  └─ 8f389de09f418da376598c42e8788d4fb6d172
│  │  ├─ e2
│  │  │  └─ 15bc4ccf138bbc38ad58ad57e92135484b3c0f
│  │  ├─ e9
│  │  │  └─ ffa3083ad279ecf95fd8eae59cb253e9a539c4
│  │  ├─ f7
│  │  │  └─ fa87eb875260ed98651bc419c8139b5119e554
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ master
│     └─ tags
├─ .gitignore
├─ eslint.config.mjs
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ favicon.ico
│  └─ logo
│     └─ logo.png
├─ README.md
├─ src
│  ├─ app
│  │  ├─ favicon.ico
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  └─ page.tsx
│  ├─ components
│  │  ├─ Charts.tsx
│  │  ├─ Header.tsx
│  │  ├─ LineChartComponent.tsx
│  │  ├─ OverviewCards.tsx
│  │  ├─ PieChartComponent.tsx
│  │  ├─ Sidebar.tsx
│  │  ├─ SuplierTable.tsx
│  │  └─ ui
│  │     ├─ accordion.tsx
│  │     ├─ alert-dialog.tsx
│  │     ├─ alert.tsx
│  │     ├─ aspect-ratio.tsx
│  │     ├─ avatar.tsx
│  │     ├─ badge.tsx
│  │     ├─ breadcrumb.tsx
│  │     ├─ button.tsx
│  │     ├─ calendar.tsx
│  │     ├─ card.tsx
│  │     ├─ carousel.tsx
│  │     ├─ chart.tsx
│  │     ├─ checkbox.tsx
│  │     ├─ collapsible.tsx
│  │     ├─ command.tsx
│  │     ├─ context-menu.tsx
│  │     ├─ dialog.tsx
│  │     ├─ drawer.tsx
│  │     ├─ dropdown-menu.tsx
│  │     ├─ form.tsx
│  │     ├─ hover-card.tsx
│  │     ├─ input-otp.tsx
│  │     ├─ input.tsx
│  │     ├─ label.tsx
│  │     ├─ menubar.tsx
│  │     ├─ navigation-menu.tsx
│  │     ├─ pagination.tsx
│  │     ├─ popover.tsx
│  │     ├─ progress.tsx
│  │     ├─ radio-group.tsx
│  │     ├─ resizable.tsx
│  │     ├─ scroll-area.tsx
│  │     ├─ select.tsx
│  │     ├─ separator.tsx
│  │     ├─ sheet.tsx
│  │     ├─ sidebar.tsx
│  │     ├─ skeleton.tsx
│  │     ├─ slider.tsx
│  │     ├─ sonner.tsx
│  │     ├─ switch.tsx
│  │     ├─ table.tsx
│  │     ├─ tabs.tsx
│  │     ├─ textarea.tsx
│  │     ├─ toast.tsx
│  │     ├─ toaster.tsx
│  │     ├─ toggle-group.tsx
│  │     ├─ toggle.tsx
│  │     ├─ tooltip.tsx
│  │     └─ use-toast.ts
│  ├─ data
│  │  └─ dashboard.json
│  ├─ hooks
│  │  ├─ use-mobile.tsx
│  │  └─ use-toast.ts
│  ├─ icons
│  │  ├─ adminPanel.png
│  │  ├─ arrow
│  │  │  ├─ downarrow.png
│  │  │  └─ uparrow.png
│  │  ├─ dashboard.png
│  │  ├─ menu1.png
│  │  ├─ menu2.png
│  │  ├─ menu3.png
│  │  ├─ profile.png
│  │  ├─ support.png
│  │  ├─ supportBackground.png
│  │  ├─ supportfront.png
│  │  ├─ supportIcon.png
│  │  └─ user
│  │     ├─ about.png
│  │     ├─ firm.png
│  │     ├─ help.png
│  │     ├─ logout.png
│  │     ├─ notificaion.png
│  │     ├─ notification.png
│  │     ├─ profile.png
│  │     ├─ settings.png
│  │     └─ user.png
│  └─ lib
│     └─ utils.ts
├─ tailwind.config.ts
└─ tsconfig.json

```