'use client';

import { useEffect } from 'react';
import { getFileIconSvg } from '@/lib/codeFileIcons';

export function BlogCodeEnhancer() {
  useEffect(() => {
    const copyIcon =
      '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>';
    const checkIcon =
      '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>';

    const blocks = document.querySelectorAll<HTMLPreElement>(
      '.prose pre:not([data-code-enhanced])',
    );

    blocks.forEach((pre) => {
      pre.dataset.codeEnhanced = 'true';
      pre.classList.add('m-0', 'rounded-t-none', 'border-0', 'overflow-x-auto');
      pre.style.margin = '0';
      pre.style.border = '0';
      pre.style.borderTopLeftRadius = '0';
      pre.style.borderTopRightRadius = '0';

      const filename = pre.dataset.filename;
      const wrapper = document.createElement('div');
      wrapper.className =
        'not-prose my-7 overflow-hidden rounded-lg border border-[#30363d]';
      wrapper.style.background = '#0d1117';

      const toolbar = document.createElement('div');
      toolbar.className =
        'flex min-h-10 items-center justify-between gap-3 px-3';
      toolbar.style.cssText =
        'background:#161b22;border-bottom:1px solid #30363d;';

      const label = document.createElement('div');
      label.className =
        'flex min-w-0 max-w-[calc(100%-3rem)] items-center gap-2 px-1';

      const icon = document.createElement('span');
      icon.className = 'inline-flex shrink-0 items-center';
      icon.innerHTML = getFileIconSvg(filename);

      const name = document.createElement('span');
      name.className = 'truncate font-mono text-[11px] font-medium';
      name.style.color = '#e6edf3';
      name.textContent = filename || 'Code';

      label.append(icon, name);

      const button = document.createElement('button');
      button.type = 'button';
      button.className =
        'inline-flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-md transition-colors';
      button.style.color = '#8b949e';
      button.style.cursor = 'pointer';
      button.innerHTML = copyIcon;
      button.setAttribute('aria-label', 'Copy code');
      button.setAttribute('title', 'Copy code');

      button.addEventListener('click', async () => {
        await navigator.clipboard.writeText(pre.innerText.trimEnd());
        button.innerHTML = checkIcon;
        button.setAttribute('aria-label', 'Code copied');
        button.setAttribute('title', 'Code copied');
        window.setTimeout(() => {
          button.innerHTML = copyIcon;
          button.setAttribute('aria-label', 'Copy code');
          button.setAttribute('title', 'Copy code');
        }, 1600);
      });

      toolbar.append(label, button);
      pre.parentNode?.insertBefore(wrapper, pre);
      wrapper.append(toolbar, pre);
    });
  }, []);

  return null;
}
