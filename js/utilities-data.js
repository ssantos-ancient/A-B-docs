/* ==========================================================================
   Utility classes — data
   --------------------------------------------------------------------------
   One entry per class. Add new classes here; the page updates automatically.
   ========================================================================== */

// cat = main category  |  sub = subcategory  |  resp = responsive badge (mobile/desktop/tablet/both/null)
const CLASSES = [

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // DISPLAY
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  { name:'flex',                cat:'Display', sub:'Box Model',   desc:'display: flex (row direction).',                            css:'display: flex;' },
  { name:'flex-column',         cat:'Display', sub:'Box Model',   desc:'display: flex with column direction.',                      css:'display: flex;\nflex-direction: column;' },
  { name:'display-block',       cat:'Display', sub:'Box Model',   desc:'display: block.',                                           css:'display: block;' },
  { name:'inline-block',        cat:'Display', sub:'Box Model',   desc:'display: inline-block.',                                    css:'display: inline-block;' },

  { name:'relative',            cat:'Display', sub:'Positioning', desc:'position: relative.',                                       css:'position: relative;' },
  { name:'absolute',            cat:'Display', sub:'Positioning', desc:'position: absolute.',                                       css:'position: absolute;' },
  { name:'inset',               cat:'Display', sub:'Positioning', desc:'inset: 0 — fills its positioned parent.',                   css:'inset: 0;' },

  { name:'noverflow',           cat:'Display', sub:'Overflow',    desc:'Clips overflowing content.',                                css:'overflow: hidden;' },
  { name:'overflow-x',          cat:'Display', sub:'Overflow',    desc:'Horizontal scroll when content overflows.',                 css:'overflow-x: auto;' },

  { name:'hide',                cat:'Display', sub:'Visibility',  desc:'Removes element from layout (display: none !important).',   css:'display: none !important;' },
  { name:'hidden',              cat:'Display', sub:'Visibility',  desc:'Alias for .hide.',                                          css:'display: none !important;' },
  { name:'visibility-hidden',   cat:'Display', sub:'Visibility',  desc:'Invisible but still occupies layout space.',                css:'visibility: hidden;' },
  { name:'visually-hidden',     cat:'Display', sub:'Visibility',  desc:'Accessible hide — invisible but readable by screen readers.', css:'position: absolute;\nwidth: 1px; height: 1px;\noverflow: hidden; clip: rect(0,0,0,0);' },
  { name:'visually-hidden--inline', cat:'Display', sub:'Visibility', desc:'Visually hidden with inline-level height preserved.',   css:'position: absolute;\nwidth: 1px; height: 1em;\noverflow: hidden; clip: rect(0,0,0,0);' },
  { name:'visually-hidden--static', cat:'Display', sub:'Visibility', desc:'Visually hidden with static positioning.',              css:'position: static;\nwidth: 1px; height: 1px;\noverflow: hidden; clip: rect(0,0,0,0);' },
  { name:'show_desktop',        cat:'Display', sub:'Visibility',  desc:'Visible on desktop only — hidden below 768px.', resp:'desktop', css:'@media (max-width: 768px) { display: none; }' },
  { name:'show_mobile',         cat:'Display', sub:'Visibility',  desc:'Visible on mobile only — hidden from 768px up.', resp:'mobile', css:'@media (min-width: 768px) { display: none; }' },
  { name:'hide_tablet',         cat:'Display', sub:'Visibility',  desc:'Hidden within tablet viewport range.', resp:'tablet',            css:'@media (600px–1199px) { display: none; }' },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // FLEXBOX
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  { name:'justify-start',       cat:'Flexbox', sub:'Justify Content', desc:'justify-content: flex-start.',     css:'justify-content: flex-start;' },
  { name:'justify-end',         cat:'Flexbox', sub:'Justify Content', desc:'justify-content: flex-end.',       css:'justify-content: flex-end;' },
  { name:'justify-between',     cat:'Flexbox', sub:'Justify Content', desc:'justify-content: space-between.',  css:'justify-content: space-between;' },
  { name:'justify-around',      cat:'Flexbox', sub:'Justify Content', desc:'justify-content: space-around.',   css:'justify-content: space-around;' },
  { name:'justify-center',      cat:'Flexbox', sub:'Justify Content', desc:'justify-content: center.',         css:'justify-content: center;' },
  { name:'justify-button-bottom',cat:'Flexbox',sub:'Justify Content', desc:'flex-start with button pushed to bottom via margin-top: auto.', css:'justify-content: flex-start;\n> .button { margin-top: auto; }' },
  { name:'d-justify-start',     cat:'Flexbox', sub:'Justify Content', desc:'justify-content: flex-start on desktop.', resp:'desktop', css:'@media (min-width: 768px) { justify-content: flex-start; }' },
  { name:'d-justify-end',       cat:'Flexbox', sub:'Justify Content', desc:'justify-content: flex-end on desktop.',   resp:'desktop', css:'@media (min-width: 768px) { justify-content: flex-end; }' },
  { name:'d-justify-between',   cat:'Flexbox', sub:'Justify Content', desc:'justify-content: space-between on desktop.', resp:'desktop', css:'@media (min-width: 768px) { justify-content: space-between; }' },
  { name:'d-justify-around',    cat:'Flexbox', sub:'Justify Content', desc:'justify-content: space-around on desktop.',  resp:'desktop', css:'@media (min-width: 768px) { justify-content: space-around; }' },
  { name:'d-justify-center',    cat:'Flexbox', sub:'Justify Content', desc:'justify-content: center on desktop.',         resp:'desktop', css:'@media (min-width: 768px) { justify-content: center; }' },

  { name:'items-center',        cat:'Flexbox', sub:'Align Items',   desc:'align-items: center.',        css:'align-items: center;' },
  { name:'items-start',         cat:'Flexbox', sub:'Align Items',   desc:'align-items: flex-start.',    css:'align-items: flex-start;' },
  { name:'items-end',           cat:'Flexbox', sub:'Align Items',   desc:'align-items: flex-end.',      css:'align-items: flex-end;' },
  { name:'d-items-center',      cat:'Flexbox', sub:'Align Items',   desc:'align-items: center on desktop.',     resp:'desktop', css:'@media (min-width: 768px) { align-items: center; }' },
  { name:'d-items-start',       cat:'Flexbox', sub:'Align Items',   desc:'align-items: flex-start on desktop.', resp:'desktop', css:'@media (min-width: 768px) { align-items: flex-start; }' },
  { name:'d-items-end',         cat:'Flexbox', sub:'Align Items',   desc:'align-items: flex-end on desktop.',   resp:'desktop', css:'@media (min-width: 768px) { align-items: flex-end; }' },

  { name:'content-center',      cat:'Flexbox', sub:'Align Content', desc:'align-content: center.',           css:'align-content: center;' },
  { name:'content-start',       cat:'Flexbox', sub:'Align Content', desc:'align-content: flex-start.',       css:'align-content: flex-start;' },
  { name:'content-end',         cat:'Flexbox', sub:'Align Content', desc:'align-content: flex-end.',         css:'align-content: flex-end;' },
  { name:'content-between',     cat:'Flexbox', sub:'Align Content', desc:'align-content: space-between.',    css:'align-content: space-between;' },
  { name:'content-around',      cat:'Flexbox', sub:'Align Content', desc:'align-content: space-around.',     css:'align-content: space-around;' },
  { name:'d-content-center',    cat:'Flexbox', sub:'Align Content', desc:'align-content: center on desktop.',    resp:'desktop', css:'@media (min-width: 768px) { align-content: center; }' },
  { name:'d-content-start',     cat:'Flexbox', sub:'Align Content', desc:'align-content: flex-start on desktop.',resp:'desktop', css:'@media (min-width: 768px) { align-content: flex-start; }' },
  { name:'d-content-end',       cat:'Flexbox', sub:'Align Content', desc:'align-content: flex-end on desktop.',  resp:'desktop', css:'@media (min-width: 768px) { align-content: flex-end; }' },

  { name:'flex-end',            cat:'Flexbox', sub:'Align Self',    desc:'align-self: flex-end.',   css:'align-self: flex-end;' },
  { name:'flex-start',          cat:'Flexbox', sub:'Align Self',    desc:'align-self: flex-start.', css:'align-self: flex-start;' },
  { name:'flex-center',         cat:'Flexbox', sub:'Align Self',    desc:'align-self: center.',     css:'align-self: center;' },

  { name:'nowrap',              cat:'Flexbox', sub:'Wrapping', desc:'Flex container that never wraps.',       css:'display: flex;\nflex-wrap: nowrap;' },
  { name:'nowrap_d',            cat:'Flexbox', sub:'Wrapping', desc:'No wrapping on desktop (768px+).',  resp:'desktop', css:'@media (min-width: 768px) { flex-wrap: nowrap; }' },
  { name:'nowrap_m',            cat:'Flexbox', sub:'Wrapping', desc:'No wrapping on mobile (max 768px).', resp:'mobile', css:'@media (max-width: 768px) { flex-wrap: nowrap; }' },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // GAP
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  { name:'nogap',   cat:'Gap', sub:'All Breakpoints', desc:'gap: 0.',    css:'gap: 0;' },
  { name:'gap-xs',  cat:'Gap', sub:'All Breakpoints', desc:'gap: 4px.',  css:'gap: 4px;' },
  { name:'gap-s',   cat:'Gap', sub:'All Breakpoints', desc:'gap: 8px.',  css:'gap: 8px;' },
  { name:'gap-m',   cat:'Gap', sub:'All Breakpoints', desc:'gap: 16px.', css:'gap: 16px;' },
  { name:'gap-ml',  cat:'Gap', sub:'All Breakpoints', desc:'gap: 24px.', css:'gap: 24px;' },
  { name:'gap-l',   cat:'Gap', sub:'All Breakpoints', desc:'gap: 40px.', css:'gap: 40px;' },
  { name:'m-nogap', cat:'Gap', sub:'Mobile Only', desc:'gap: 0 on mobile.', resp:'mobile', css:'@media (max-width: 768px) { gap: 0; }' },
  { name:'m-gap-xs',cat:'Gap', sub:'Mobile Only', desc:'gap: 4px on mobile.',  resp:'mobile', css:'@media (max-width: 768px) { gap: 4px; }' },
  { name:'m-gap-s', cat:'Gap', sub:'Mobile Only', desc:'gap: 8px on mobile.',  resp:'mobile', css:'@media (max-width: 768px) { gap: 8px; }' },
  { name:'m-gap-m', cat:'Gap', sub:'Mobile Only', desc:'gap: 16px on mobile.', resp:'mobile', css:'@media (max-width: 768px) { gap: 16px; }' },
  { name:'m-gap-ml',cat:'Gap', sub:'Mobile Only', desc:'gap: 24px on mobile.', resp:'mobile', css:'@media (max-width: 768px) { gap: 24px; }' },
  { name:'m-gap-l', cat:'Gap', sub:'Mobile Only', desc:'gap: 40px on mobile.', resp:'mobile', css:'@media (max-width: 768px) { gap: 40px; }' },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // GRID
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  { name:'grid',    cat:'Grid', sub:'All Breakpoints', desc:'12-column CSS grid with 24px gap.',     css:'display: grid;\ngrid-template-columns: repeat(12, 1fr);\ngap: 24px;' },
  { name:'grid-1',  cat:'Grid', sub:'All Breakpoints', desc:'1-column grid.',  css:'display: grid;\ngrid-template-columns: 1fr;' },
  { name:'grid-2',  cat:'Grid', sub:'All Breakpoints', desc:'2-column grid.',  css:'display: grid;\ngrid-template-columns: repeat(2, 1fr);' },
  { name:'grid-3',  cat:'Grid', sub:'All Breakpoints', desc:'3-column grid.',  css:'display: grid;\ngrid-template-columns: repeat(3, 1fr);' },
  { name:'d-grid-2',cat:'Grid', sub:'Desktop Only', desc:'2-column grid on desktop.', resp:'desktop', css:'@media (min-width: 768px) { grid-template-columns: repeat(2, 1fr); }' },
  { name:'d-grid-3',cat:'Grid', sub:'Desktop Only', desc:'3-column grid on desktop.', resp:'desktop', css:'@media (min-width: 768px) { grid-template-columns: repeat(3, 1fr); }' },
  { name:'d-grid-4',cat:'Grid', sub:'Desktop Only', desc:'4-column grid on desktop.', resp:'desktop', css:'@media (min-width: 768px) { grid-template-columns: repeat(4, 1fr); }' },
  { name:'d-grid-6',cat:'Grid', sub:'Desktop Only', desc:'6-column grid on desktop.', resp:'desktop', css:'@media (min-width: 768px) { grid-template-columns: repeat(6, 1fr); }' },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // MARGIN
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  { name:'mt-xxs',  cat:'Margin', sub:'Top', desc:'margin-top: 3px.',                                  css:'margin-top: 3px;' },
  { name:'mt-xs',   cat:'Margin', sub:'Top', desc:'margin-top: 4px mobile / 8px desktop.',  resp:'both', css:'margin-top: 4px;\n@media (min-width:768px) { margin-top: 8px; }' },
  { name:'mt-s',    cat:'Margin', sub:'Top', desc:'margin-top: 8px mobile / 16px desktop.', resp:'both', css:'margin-top: 8px;\n@media (min-width:768px) { margin-top: 16px; }' },
  { name:'mt-sm',   cat:'Margin', sub:'Top', desc:'margin-top: 16px mobile / 24px desktop.',resp:'both', css:'margin-top: 16px;\n@media (min-width:768px) { margin-top: 24px; }' },
  { name:'mt-m',    cat:'Margin', sub:'Top', desc:'margin-top: 24px mobile / 40px desktop.',resp:'both', css:'margin-top: 24px;\n@media (min-width:768px) { margin-top: 40px; }' },
  { name:'mt-l',    cat:'Margin', sub:'Top', desc:'margin-top: 40px mobile / 72px desktop.',resp:'both', css:'margin-top: 40px;\n@media (min-width:768px) { margin-top: 72px; }' },
  { name:'mt-xl',   cat:'Margin', sub:'Top', desc:'margin-top: 72px mobile / 112px desktop.',resp:'both',css:'margin-top: 72px;\n@media (min-width:768px) { margin-top: 112px; }' },
  { name:'mt-none', cat:'Margin', sub:'Top', desc:'Removes margin-top.',                               css:'margin-top: 0;' },
  { name:'mb-xs',   cat:'Margin', sub:'Bottom', desc:'margin-bottom: 4px mobile / 8px desktop.',  resp:'both', css:'margin-bottom: 4px;\n@media (min-width:768px) { margin-bottom: 8px; }' },
  { name:'mb-s',    cat:'Margin', sub:'Bottom', desc:'margin-bottom: 8px mobile / 16px desktop.', resp:'both', css:'margin-bottom: 8px;\n@media (min-width:768px) { margin-bottom: 16px; }' },
  { name:'mb-sm',   cat:'Margin', sub:'Bottom', desc:'margin-bottom: 16px mobile / 24px desktop.',resp:'both', css:'margin-bottom: 16px;\n@media (min-width:768px) { margin-bottom: 24px; }' },
  { name:'mb-m',    cat:'Margin', sub:'Bottom', desc:'margin-bottom: 24px mobile / 40px desktop.',resp:'both', css:'margin-bottom: 24px;\n@media (min-width:768px) { margin-bottom: 40px; }' },
  { name:'mb-l',    cat:'Margin', sub:'Bottom', desc:'margin-bottom: 40px mobile / 72px desktop.',resp:'both', css:'margin-bottom: 40px;\n@media (min-width:768px) { margin-bottom: 72px; }' },
  { name:'mb-xl',   cat:'Margin', sub:'Bottom', desc:'margin-bottom: 72px mobile / 112px desktop.',resp:'both',css:'margin-bottom: 72px;\n@media (min-width:768px) { margin-bottom: 112px; }' },
  { name:'mb-none', cat:'Margin', sub:'Bottom', desc:'Removes margin-bottom.',                         css:'margin-bottom: 0;' },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // PADDING
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  { name:'pt-tiny', cat:'Padding', sub:'Top', desc:'padding-top: 2px mobile / 3px desktop.',   resp:'both', css:'padding-top: 2px;\n@media (min-width:768px) { padding-top: 3px; }' },
  { name:'pt-xxxs', cat:'Padding', sub:'Top', desc:'padding-top: 4px mobile / 6px desktop.',   resp:'both', css:'padding-top: 4px;\n@media (min-width:768px) { padding-top: 6px; }' },
  { name:'pt-xxs',  cat:'Padding', sub:'Top', desc:'padding-top: 6px mobile / 12px desktop.',  resp:'both', css:'padding-top: 6px;\n@media (min-width:768px) { padding-top: 12px; }' },
  { name:'pt-xs',   cat:'Padding', sub:'Top', desc:'padding-top: 10px mobile / 20px desktop.',  resp:'both', css:'padding-top: 10px;\n@media (min-width:768px) { padding-top: 20px; }' },
  { name:'pt-s',    cat:'Padding', sub:'Top', desc:'padding-top: 20px mobile / 40px desktop.',  resp:'both', css:'padding-top: 20px;\n@media (min-width:768px) { padding-top: 40px; }' },
  { name:'pt-sm',   cat:'Padding', sub:'Top', desc:'padding-top: 30px mobile / 60px desktop.',  resp:'both', css:'padding-top: 30px;\n@media (min-width:768px) { padding-top: 60px; }' },
  { name:'pt-m',    cat:'Padding', sub:'Top', desc:'padding-top: 40px mobile / 80px desktop.',  resp:'both', css:'padding-top: 40px;\n@media (min-width:768px) { padding-top: 80px; }' },
  { name:'pt-l',    cat:'Padding', sub:'Top', desc:'padding-top: 60px mobile / 120px desktop.', resp:'both', css:'padding-top: 60px;\n@media (min-width:768px) { padding-top: 120px; }' },
  { name:'pt-xl',   cat:'Padding', sub:'Top', desc:'padding-top: 80px mobile / 160px desktop.', resp:'both', css:'padding-top: 80px;\n@media (min-width:768px) { padding-top: 160px; }' },
  { name:'pt-none', cat:'Padding', sub:'Top', desc:'Removes padding-top.',                                   css:'padding-top: 0;' },
  { name:'pb-tiny', cat:'Padding', sub:'Bottom', desc:'padding-bottom: 2px mobile / 3px desktop.',  resp:'both', css:'padding-bottom: 2px;\n@media (min-width:768px) { padding-bottom: 3px; }' },
  { name:'pb-xxxs', cat:'Padding', sub:'Bottom', desc:'padding-bottom: 4px mobile / 6px desktop.',  resp:'both', css:'padding-bottom: 4px;\n@media (min-width:768px) { padding-bottom: 6px; }' },
  { name:'pb-xxs',  cat:'Padding', sub:'Bottom', desc:'padding-bottom: 6px mobile / 12px desktop.', resp:'both', css:'padding-bottom: 6px;\n@media (min-width:768px) { padding-bottom: 12px; }' },
  { name:'pb-xs',   cat:'Padding', sub:'Bottom', desc:'padding-bottom: 10px mobile / 20px desktop.',resp:'both', css:'padding-bottom: 10px;\n@media (min-width:768px) { padding-bottom: 20px; }' },
  { name:'pb-s',    cat:'Padding', sub:'Bottom', desc:'padding-bottom: 20px mobile / 40px desktop.',resp:'both', css:'padding-bottom: 20px;\n@media (min-width:768px) { padding-bottom: 40px; }' },
  { name:'pb-sm',   cat:'Padding', sub:'Bottom', desc:'padding-bottom: 30px mobile / 60px desktop.',resp:'both', css:'padding-bottom: 30px;\n@media (min-width:768px) { padding-bottom: 60px; }' },
  { name:'pb-m',    cat:'Padding', sub:'Bottom', desc:'padding-bottom: 40px mobile / 80px desktop.',resp:'both', css:'padding-bottom: 40px;\n@media (min-width:768px) { padding-bottom: 80px; }' },
  { name:'pb-l',    cat:'Padding', sub:'Bottom', desc:'padding-bottom: 60px mobile / 120px desktop.',resp:'both',css:'padding-bottom: 60px;\n@media (min-width:768px) { padding-bottom: 120px; }' },
  { name:'pb-xl',   cat:'Padding', sub:'Bottom', desc:'padding-bottom: 80px mobile / 160px desktop.',resp:'both',css:'padding-bottom: 80px;\n@media (min-width:768px) { padding-bottom: 160px; }' },
  { name:'pb-none', cat:'Padding', sub:'Bottom', desc:'Removes padding-bottom.',                              css:'padding-bottom: 0;' },
  { name:'pr-min',  cat:'Padding', sub:'Horizontal', desc:'padding-right: 24px.',      css:'padding-right: 24px;' },
  { name:'pl-min',  cat:'Padding', sub:'Horizontal', desc:'padding-left: 24px.',       css:'padding-left: 24px;' },
  { name:'p-16',    cat:'Padding', sub:'Horizontal', desc:'padding: 16px all sides.',  css:'padding: 16px;' },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // CONTAINER PADDING
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  { name:'container-pad',    cat:'Container', sub:'All Sides',   desc:'Responsive horizontal padding using CSS custom properties.', css:'padding-left: var(--container-pad);\npadding-right: var(--container-pad);' },
  { name:'m-container-pad',  cat:'Container', sub:'All Sides',   desc:'Container padding on mobile only.',  resp:'mobile', css:'@media (max-width: 768px) { padding: var(--container-pad); }' },
  { name:'t-container-pad',  cat:'Container', sub:'All Sides',   desc:'Container padding on tablet only.',  resp:'tablet', css:'@media (768px–1024px) { padding: var(--container-pad); }' },
  { name:'d-container-pad',  cat:'Container', sub:'All Sides',   desc:'Container padding on desktop only.', resp:'desktop',css:'@media (min-width: 1024px) { padding: var(--container-pad); }' },
  { name:'container-pad-l',  cat:'Container', sub:'Left Only',   desc:'Container padding on left only.',    css:'padding-left: var(--container-pad);' },
  { name:'m-container-pad-l',cat:'Container', sub:'Left Only',   desc:'Left container padding — mobile.',   resp:'mobile', css:'@media (max-width: 768px) { padding-left: var(--container-pad); }' },
  { name:'t-container-pad-l',cat:'Container', sub:'Left Only',   desc:'Left container padding — tablet.',   resp:'tablet', css:'@media (768px–1024px) { padding-left: var(--container-pad); }' },
  { name:'d-container-pad-l',cat:'Container', sub:'Left Only',   desc:'Left container padding — desktop.',  resp:'desktop',css:'@media (min-width: 1024px) { padding-left: var(--container-pad); }' },
  { name:'container-pad-r',  cat:'Container', sub:'Right Only',  desc:'Container padding on right only.',   css:'padding-right: var(--container-pad);' },
  { name:'m-container-pad-r',cat:'Container', sub:'Right Only',  desc:'Right container padding — mobile.',  resp:'mobile', css:'@media (max-width: 768px) { padding-right: var(--container-pad); }' },
  { name:'t-container-pad-r',cat:'Container', sub:'Right Only',  desc:'Right container padding — tablet.',  resp:'tablet', css:'@media (768px–1024px) { padding-right: var(--container-pad); }' },
  { name:'d-container-pad-r',cat:'Container', sub:'Right Only',  desc:'Right container padding — desktop.', resp:'desktop',css:'@media (min-width: 1024px) { padding-right: var(--container-pad); }' },
  { name:'no-space-mob',     cat:'Container', sub:'Overrides',   desc:'Removes horizontal padding on mobile.', resp:'mobile', css:'@media (max-width: 768px) { padding-left: 0; padding-right: 0; }' },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // WIDTH
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  { name:'wm-40', cat:'Width', sub:'Mobile',  desc:'width: 40% on mobile.',  resp:'mobile', css:'@media (max-width: 768px) { width: 40%; }' },
  { name:'wm-50', cat:'Width', sub:'Mobile',  desc:'width: 50% on mobile.',  resp:'mobile', css:'@media (max-width: 768px) { width: 50%; }' },
  { name:'wm-60', cat:'Width', sub:'Mobile',  desc:'width: 60% on mobile.',  resp:'mobile', css:'@media (max-width: 768px) { width: 60%; }' },
  { name:'wm-70', cat:'Width', sub:'Mobile',  desc:'width: 70% on mobile.',  resp:'mobile', css:'@media (max-width: 768px) { width: 70%; }' },
  { name:'wm-80', cat:'Width', sub:'Mobile',  desc:'width: 80% on mobile.',  resp:'mobile', css:'@media (max-width: 768px) { width: 80%; }' },
  { name:'wm-90', cat:'Width', sub:'Mobile',  desc:'width: 90% on mobile.',  resp:'mobile', css:'@media (max-width: 768px) { width: 90%; }' },
  { name:'wm-100',cat:'Width', sub:'Mobile',  desc:'width: 100% on mobile.', resp:'mobile', css:'@media (max-width: 768px) { width: 100%; }' },
  { name:'wd-40', cat:'Width', sub:'Desktop', desc:'width: 40% on desktop.', resp:'desktop',css:'@media (min-width: 768px) { width: 40%; }' },
  { name:'wd-50', cat:'Width', sub:'Desktop', desc:'width: 50% on desktop.', resp:'desktop',css:'@media (min-width: 768px) { width: 50%; }' },
  { name:'wd-60', cat:'Width', sub:'Desktop', desc:'width: 60% on desktop.', resp:'desktop',css:'@media (min-width: 768px) { width: 60%; }' },
  { name:'wd-70', cat:'Width', sub:'Desktop', desc:'width: 70% on desktop.', resp:'desktop',css:'@media (min-width: 768px) { width: 70%; }' },
  { name:'wd-80', cat:'Width', sub:'Desktop', desc:'width: 80% on desktop.', resp:'desktop',css:'@media (min-width: 768px) { width: 80%; }' },
  { name:'wd-90', cat:'Width', sub:'Desktop', desc:'width: 90% on desktop.', resp:'desktop',css:'@media (min-width: 768px) { width: 90%; }' },
  { name:'wd-100',cat:'Width', sub:'Desktop', desc:'width: 100% on desktop.',resp:'desktop',css:'@media (min-width: 768px) { width: 100%; }' },
  { name:'centered', cat:'Width', sub:'Centering', desc:'Centers a block element with auto side margins.', css:'margin-left: auto;\nmargin-right: auto;' },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // MAX-WIDTH
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  { name:'maxwidth-300',  cat:'Max-Width', sub:'All Breakpoints', desc:'max-width: 300px.',  css:'max-width: 300px;' },
  { name:'maxwidth-400',  cat:'Max-Width', sub:'All Breakpoints', desc:'max-width: 400px.',  css:'max-width: 400px;' },
  { name:'maxwidth-500',  cat:'Max-Width', sub:'All Breakpoints', desc:'max-width: 500px.',  css:'max-width: 500px;' },
  { name:'maxwidth-600',  cat:'Max-Width', sub:'All Breakpoints', desc:'max-width: 600px.',  css:'max-width: 600px;' },
  { name:'maxwidth-700',  cat:'Max-Width', sub:'All Breakpoints', desc:'max-width: 700px.',  css:'max-width: 700px;' },
  { name:'maxwidth-800',  cat:'Max-Width', sub:'All Breakpoints', desc:'max-width: 800px.',  css:'max-width: 800px;' },
  { name:'maxwidth-900',  cat:'Max-Width', sub:'All Breakpoints', desc:'max-width: 900px.',  css:'max-width: 900px;' },
  { name:'maxwidth-1000', cat:'Max-Width', sub:'All Breakpoints', desc:'max-width: 1000px.', css:'max-width: 1000px;' },
  { name:'maxwidth-1100', cat:'Max-Width', sub:'All Breakpoints', desc:'max-width: 1100px.', css:'max-width: 1100px;' },
  { name:'maxwidth-full', cat:'Max-Width', sub:'All Breakpoints', desc:'max-width: 100%.',   css:'max-width: 100%;' },
  { name:'maxwidth-m-100', cat:'Max-Width', sub:'Mobile',  desc:'max-width: 100px on mobile.',  resp:'mobile', css:'@media (max-width: 768px) { max-width: 100px; }' },
  { name:'maxwidth-m-200', cat:'Max-Width', sub:'Mobile',  desc:'max-width: 200px on mobile.',  resp:'mobile', css:'@media (max-width: 768px) { max-width: 200px; }' },
  { name:'maxwidth-m-300', cat:'Max-Width', sub:'Mobile',  desc:'max-width: 300px on mobile.',  resp:'mobile', css:'@media (max-width: 768px) { max-width: 300px; }' },
  { name:'maxwidth-m-400', cat:'Max-Width', sub:'Mobile',  desc:'max-width: 400px on mobile.',  resp:'mobile', css:'@media (max-width: 768px) { max-width: 400px; }' },
  { name:'maxwidth-m-500', cat:'Max-Width', sub:'Mobile',  desc:'max-width: 500px on mobile.',  resp:'mobile', css:'@media (max-width: 768px) { max-width: 500px; }' },
  { name:'maxwidth-m-600', cat:'Max-Width', sub:'Mobile',  desc:'max-width: 600px on mobile.',  resp:'mobile', css:'@media (max-width: 768px) { max-width: 600px; }' },
  { name:'maxwidth-m-full',cat:'Max-Width', sub:'Mobile',  desc:'max-width: 100% on mobile.',   resp:'mobile', css:'@media (max-width: 768px) { max-width: 100%; }' },
  { name:'maxwidth-d-300', cat:'Max-Width', sub:'Desktop', desc:'max-width: 300px on desktop.',  resp:'desktop', css:'@media (min-width: 768px) { max-width: 300px; }' },
  { name:'maxwidth-d-400', cat:'Max-Width', sub:'Desktop', desc:'max-width: 400px on desktop.',  resp:'desktop', css:'@media (min-width: 768px) { max-width: 400px; }' },
  { name:'maxwidth-d-500', cat:'Max-Width', sub:'Desktop', desc:'max-width: 500px on desktop.',  resp:'desktop', css:'@media (min-width: 768px) { max-width: 500px; }' },
  { name:'maxwidth-d-600', cat:'Max-Width', sub:'Desktop', desc:'max-width: 600px on desktop.',  resp:'desktop', css:'@media (min-width: 768px) { max-width: 600px; }' },
  { name:'maxwidth-d-700', cat:'Max-Width', sub:'Desktop', desc:'max-width: 700px on desktop.',  resp:'desktop', css:'@media (min-width: 768px) { max-width: 700px; }' },
  { name:'maxwidth-d-800', cat:'Max-Width', sub:'Desktop', desc:'max-width: 800px on desktop.',  resp:'desktop', css:'@media (min-width: 768px) { max-width: 800px; }' },
  { name:'maxwidth-d-900', cat:'Max-Width', sub:'Desktop', desc:'max-width: 900px on desktop.',  resp:'desktop', css:'@media (min-width: 768px) { max-width: 900px; }' },
  { name:'maxwidth-d-1000',cat:'Max-Width', sub:'Desktop', desc:'max-width: 1000px on desktop.', resp:'desktop', css:'@media (min-width: 768px) { max-width: 1000px; }' },
  { name:'maxwidth-d-full',cat:'Max-Width', sub:'Desktop', desc:'max-width: 100% on desktop.',   resp:'desktop', css:'@media (min-width: 768px) { max-width: 100%; }' },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // MAX-HEIGHT
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  { name:'maxheight-m-300', cat:'Max-Height', sub:'Mobile',  desc:'max-height: 300px on mobile.', resp:'mobile', css:'@media (max-width: 768px) { max-height: 300px; }' },
  { name:'maxheight-m-350', cat:'Max-Height', sub:'Mobile',  desc:'max-height: 350px on mobile.', resp:'mobile', css:'@media (max-width: 768px) { max-height: 350px; }' },
  { name:'maxheight-m-450', cat:'Max-Height', sub:'Mobile',  desc:'max-height: 450px on mobile.', resp:'mobile', css:'@media (max-width: 768px) { max-height: 450px; }' },
  { name:'maxheight-m-500', cat:'Max-Height', sub:'Mobile',  desc:'max-height: 500px on mobile.', resp:'mobile', css:'@media (max-width: 768px) { max-height: 500px; }' },
  { name:'maxheight-m-550', cat:'Max-Height', sub:'Mobile',  desc:'max-height: 550px on mobile.', resp:'mobile', css:'@media (max-width: 768px) { max-height: 550px; }' },
  { name:'maxheight-d-300', cat:'Max-Height', sub:'Desktop', desc:'max-height: 300px on desktop.',resp:'desktop', css:'@media (min-width: 768px) { max-height: 300px; }' },
  { name:'maxheight-d-350', cat:'Max-Height', sub:'Desktop', desc:'max-height: 350px on desktop.',resp:'desktop', css:'@media (min-width: 768px) { max-height: 350px; }' },
  { name:'maxheight-d-400', cat:'Max-Height', sub:'Desktop', desc:'max-height: 400px on desktop.',resp:'desktop', css:'@media (min-width: 768px) { max-height: 400px; }' },
  { name:'maxheight-d-450', cat:'Max-Height', sub:'Desktop', desc:'max-height: 450px on desktop.',resp:'desktop', css:'@media (min-width: 768px) { max-height: 450px; }' },
  { name:'maxheight-d-500', cat:'Max-Height', sub:'Desktop', desc:'max-height: 500px on desktop.',resp:'desktop', css:'@media (min-width: 768px) { max-height: 500px; }' },
  { name:'maxheight-d-550', cat:'Max-Height', sub:'Desktop', desc:'max-height: 550px on desktop.',resp:'desktop', css:'@media (min-width: 768px) { max-height: 550px; }' },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // TYPOGRAPHY
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  { name:'text-center',         cat:'Typography', sub:'Alignment', desc:'text-align: center.',                         css:'text-align: center;' },
  { name:'text-left',           cat:'Typography', sub:'Alignment', desc:'text-align: left.',                           css:'text-align: left;' },
  { name:'text-right',          cat:'Typography', sub:'Alignment', desc:'text-align: right.',                          css:'text-align: right;' },
  { name:'d-text-center',       cat:'Typography', sub:'Alignment', desc:'text-align: center on desktop.',  resp:'desktop', css:'@media (min-width: 768px) { text-align: center; }' },
  { name:'d-text-left',         cat:'Typography', sub:'Alignment', desc:'text-align: left on desktop.',    resp:'desktop', css:'@media (min-width: 768px) { text-align: left; }' },
  { name:'d-text-right',        cat:'Typography', sub:'Alignment', desc:'text-align: right on desktop.',   resp:'desktop', css:'@media (min-width: 768px) { text-align: right; }' },
  { name:'t-text-center',       cat:'Typography', sub:'Alignment', desc:'text-align: center on tablet.',   resp:'tablet',  css:'@media (600px–1199px) { text-align: center; }' },
  { name:'t-text-left',         cat:'Typography', sub:'Alignment', desc:'text-align: left on tablet.',     resp:'tablet',  css:'@media (600px–1199px) { text-align: left; }' },
  { name:'t-text-right',        cat:'Typography', sub:'Alignment', desc:'text-align: right on tablet.',    resp:'tablet',  css:'@media (600px–1199px) { text-align: right; }' },

  { name:'text-18px',           cat:'Typography', sub:'Size (fixed)', desc:'~18px — font-size: 112.5%.', css:'font-size: 112.5%;' },
  { name:'text-15px',           cat:'Typography', sub:'Size (fixed)', desc:'~15px — font-size: 93.75%.', css:'font-size: 93.75%;' },
  { name:'text-14px',           cat:'Typography', sub:'Size (fixed)', desc:'~14px — font-size: 87.5%.',  css:'font-size: 87.5%;' },
  { name:'text-13px',           cat:'Typography', sub:'Size (fixed)', desc:'~13px — font-size: 81.25%.', css:'font-size: 81.25%;' },
  { name:'text-12px',           cat:'Typography', sub:'Size (fixed)', desc:'~12px — font-size: 75%.',    css:'font-size: 75%;' },
  { name:'small',               cat:'Typography', sub:'Size (fixed)', desc:'Slightly smaller text — font-size: 87.5%.', css:'font-size: 87.5%;' },

  { name:'text-m-18px',  cat:'Typography', sub:'Size (mobile)',  desc:'~18px on mobile.',  resp:'mobile', css:'@media (max-width: 768px) { font-size: 112.5%; }' },
  { name:'text-m-16px',  cat:'Typography', sub:'Size (mobile)',  desc:'~16px on mobile.',  resp:'mobile', css:'@media (max-width: 768px) { font-size: 100%; }' },
  { name:'text-m-15px',  cat:'Typography', sub:'Size (mobile)',  desc:'~15px on mobile.',  resp:'mobile', css:'@media (max-width: 768px) { font-size: 93.75%; }' },
  { name:'text-m-14px',  cat:'Typography', sub:'Size (mobile)',  desc:'~14px on mobile.',  resp:'mobile', css:'@media (max-width: 768px) { font-size: 87.5%; }' },
  { name:'text-m-13px',  cat:'Typography', sub:'Size (mobile)',  desc:'~13px on mobile.',  resp:'mobile', css:'@media (max-width: 768px) { font-size: 81.25%; }' },
  { name:'text-m-12px',  cat:'Typography', sub:'Size (mobile)',  desc:'~12px on mobile.',  resp:'mobile', css:'@media (max-width: 768px) { font-size: 75%; }' },
  { name:'text-t-18px',  cat:'Typography', sub:'Size (tablet)',  desc:'~18px on tablet.',  resp:'tablet', css:'@media (768px–1024px) { font-size: 112.5%; }' },
  { name:'text-t-16px',  cat:'Typography', sub:'Size (tablet)',  desc:'~16px on tablet.',  resp:'tablet', css:'@media (768px–1024px) { font-size: 100%; }' },
  { name:'text-t-15px',  cat:'Typography', sub:'Size (tablet)',  desc:'~15px on tablet.',  resp:'tablet', css:'@media (768px–1024px) { font-size: 93.75%; }' },
  { name:'text-t-14px',  cat:'Typography', sub:'Size (tablet)',  desc:'~14px on tablet.',  resp:'tablet', css:'@media (768px–1024px) { font-size: 87.5%; }' },
  { name:'text-t-13px',  cat:'Typography', sub:'Size (tablet)',  desc:'~13px on tablet.',  resp:'tablet', css:'@media (768px–1024px) { font-size: 81.25%; }' },
  { name:'text-t-12px',  cat:'Typography', sub:'Size (tablet)',  desc:'~12px on tablet.',  resp:'tablet', css:'@media (768px–1024px) { font-size: 75%; }' },
  { name:'text-d-18px',  cat:'Typography', sub:'Size (desktop)', desc:'~18px on desktop.', resp:'desktop', css:'@media (min-width: 1024px) { font-size: 112.5%; }' },
  { name:'text-d-17px',  cat:'Typography', sub:'Size (desktop)', desc:'~17px on desktop.', resp:'desktop', css:'@media (min-width: 1024px) { font-size: 106.25%; }' },
  { name:'text-d-15px',  cat:'Typography', sub:'Size (desktop)', desc:'~15px on desktop.', resp:'desktop', css:'@media (min-width: 1024px) { font-size: 93.75%; }' },
  { name:'text-d-14px',  cat:'Typography', sub:'Size (desktop)', desc:'~14px on desktop.', resp:'desktop', css:'@media (min-width: 1024px) { font-size: 87.5%; }' },
  { name:'text-d-13px',  cat:'Typography', sub:'Size (desktop)', desc:'~13px on desktop.', resp:'desktop', css:'@media (min-width: 1024px) { font-size: 81.25%; }' },
  { name:'text-d-12px',  cat:'Typography', sub:'Size (desktop)', desc:'~12px on desktop.', resp:'desktop', css:'@media (min-width: 1024px) { font-size: 75%; }' },

  { name:'text-m-70',  cat:'Typography', sub:'Scale (mobile)',  desc:'font-size: 70% on mobile.',  resp:'mobile', css:'@media (max-width: 768px) { font-size: 70%; }' },
  { name:'text-m-80',  cat:'Typography', sub:'Scale (mobile)',  desc:'font-size: 80% on mobile.',  resp:'mobile', css:'@media (max-width: 768px) { font-size: 80%; }' },
  { name:'text-m-90',  cat:'Typography', sub:'Scale (mobile)',  desc:'font-size: 90% on mobile.',  resp:'mobile', css:'@media (max-width: 768px) { font-size: 90%; }' },
  { name:'text-m-100', cat:'Typography', sub:'Scale (mobile)',  desc:'font-size: 100% on mobile.', resp:'mobile', css:'@media (max-width: 768px) { font-size: 100%; }' },
  { name:'text-m-110', cat:'Typography', sub:'Scale (mobile)',  desc:'font-size: 110% on mobile.', resp:'mobile', css:'@media (max-width: 768px) { font-size: 110%; }' },
  { name:'text-m-120', cat:'Typography', sub:'Scale (mobile)',  desc:'font-size: 120% on mobile.', resp:'mobile', css:'@media (max-width: 768px) { font-size: 120%; }' },
  { name:'text-m-130', cat:'Typography', sub:'Scale (mobile)',  desc:'font-size: 130% on mobile.', resp:'mobile', css:'@media (max-width: 768px) { font-size: 130%; }' },
  { name:'text-m-140', cat:'Typography', sub:'Scale (mobile)',  desc:'font-size: 140% on mobile.', resp:'mobile', css:'@media (max-width: 768px) { font-size: 140%; }' },
  { name:'text-m-150', cat:'Typography', sub:'Scale (mobile)',  desc:'font-size: 150% on mobile.', resp:'mobile', css:'@media (max-width: 768px) { font-size: 150%; }' },
  { name:'text-m-160', cat:'Typography', sub:'Scale (mobile)',  desc:'font-size: 160% on mobile.', resp:'mobile', css:'@media (max-width: 768px) { font-size: 160%; }' },
  { name:'text-m-180', cat:'Typography', sub:'Scale (mobile)',  desc:'font-size: 180% on mobile.', resp:'mobile', css:'@media (max-width: 768px) { font-size: 180%; }' },
  { name:'text-m-200', cat:'Typography', sub:'Scale (mobile)',  desc:'font-size: 200% on mobile.', resp:'mobile', css:'@media (max-width: 768px) { font-size: 200%; }' },
  { name:'text-d-70',  cat:'Typography', sub:'Scale (desktop)', desc:'font-size: 70% on desktop.',  resp:'desktop', css:'@media (min-width: 768px) { font-size: 70%; }' },
  { name:'text-d-80',  cat:'Typography', sub:'Scale (desktop)', desc:'font-size: 80% on desktop.',  resp:'desktop', css:'@media (min-width: 768px) { font-size: 80%; }' },
  { name:'text-d-90',  cat:'Typography', sub:'Scale (desktop)', desc:'font-size: 90% on desktop.',  resp:'desktop', css:'@media (min-width: 768px) { font-size: 90%; }' },
  { name:'text-d-100', cat:'Typography', sub:'Scale (desktop)', desc:'font-size: 100% on desktop.', resp:'desktop', css:'@media (min-width: 768px) { font-size: 100%; }' },
  { name:'text-d-110', cat:'Typography', sub:'Scale (desktop)', desc:'font-size: 110% on desktop.', resp:'desktop', css:'@media (min-width: 768px) { font-size: 110%; }' },
  { name:'text-d-120', cat:'Typography', sub:'Scale (desktop)', desc:'font-size: 120% on desktop.', resp:'desktop', css:'@media (min-width: 768px) { font-size: 120%; }' },
  { name:'text-d-130', cat:'Typography', sub:'Scale (desktop)', desc:'font-size: 130% on desktop.', resp:'desktop', css:'@media (min-width: 768px) { font-size: 130%; }' },
  { name:'text-d-140', cat:'Typography', sub:'Scale (desktop)', desc:'font-size: 140% on desktop.', resp:'desktop', css:'@media (min-width: 768px) { font-size: 140%; }' },
  { name:'text-d-150', cat:'Typography', sub:'Scale (desktop)', desc:'font-size: 150% on desktop.', resp:'desktop', css:'@media (min-width: 768px) { font-size: 150%; }' },
  { name:'text-d-160', cat:'Typography', sub:'Scale (desktop)', desc:'font-size: 160% on desktop.', resp:'desktop', css:'@media (min-width: 768px) { font-size: 160%; }' },
  { name:'text-d-180', cat:'Typography', sub:'Scale (desktop)', desc:'font-size: 180% on desktop.', resp:'desktop', css:'@media (min-width: 768px) { font-size: 180%; }' },
  { name:'text-d-200', cat:'Typography', sub:'Scale (desktop)', desc:'font-size: 200% on desktop.', resp:'desktop', css:'@media (min-width: 768px) { font-size: 200%; }' },

  { name:'text-light',       cat:'Typography', sub:'Color', desc:'White text.',                          css:'color: #ffffff;' },
  { name:'text-dark',        cat:'Typography', sub:'Color', desc:'Main brand text color.',               css:'color: var(--color-text);' },
  { name:'text-gold',        cat:'Typography', sub:'Color', desc:'Brand gold text.',                     css:'color: var(--color-gold);' },

  { name:'uppercase',        cat:'Typography', sub:'Transform & Decoration', desc:'Uppercase + 1px letter-spacing.',      css:'text-transform: uppercase;\nletter-spacing: 1px;' },
  { name:'underline',        cat:'Typography', sub:'Transform & Decoration', desc:'Underline decoration.',                css:'text-decoration: underline;' },
  { name:'trim',             cat:'Typography', sub:'Transform & Decoration', desc:'Truncates overflowing text with …',    css:'white-space: nowrap;\noverflow: hidden;\ntext-overflow: ellipsis;' },
  { name:'pretty',           cat:'Typography', sub:'Transform & Decoration', desc:'text-wrap: pretty for better line breaks.', css:'text-wrap: pretty;' },

  { name:'tracking-tight',   cat:'Typography', sub:'Letter Spacing', desc:'letter-spacing: -0.03em.',  css:'letter-spacing: -0.03em;' },
  { name:'tracking-tighter', cat:'Typography', sub:'Letter Spacing', desc:'letter-spacing: -0.05em.',  css:'letter-spacing: -0.05em;' },
  { name:'tracking-wide',    cat:'Typography', sub:'Letter Spacing', desc:'letter-spacing: 0.025em.',  css:'letter-spacing: 0.025em;' },
  { name:'tracking-wider',   cat:'Typography', sub:'Letter Spacing', desc:'letter-spacing: 0.05em.',   css:'letter-spacing: 0.05em;' },
  { name:'tracking-widest',  cat:'Typography', sub:'Letter Spacing', desc:'letter-spacing: 0.1em.',    css:'letter-spacing: 0.1em;' },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // FONTS
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  { name:'body-font',   cat:'Fonts', sub:'Font Family', desc:'Body font stack.',             css:'font-family: var(--font-stack-body);' },
  { name:'header-font', cat:'Fonts', sub:'Font Family', desc:'Header font stack.',           css:'font-family: var(--font-stack-header);' },
  { name:'heavy-font',  cat:'Fonts', sub:'Font Family', desc:'Heavy font stack.',            css:'font-family: var(--font-stack-heavy);' },
  { name:'bold-font',   cat:'Fonts', sub:'Font Family', desc:'Bold font stack.',             css:'font-family: var(--font-stack-bold);' },
  { name:'asul',        cat:'Fonts', sub:'Font Family', desc:'Alternate header font stack.', css:'font-family: var(--font-stack-header-alt);' },
  { name:'font-thin',   cat:'Fonts', sub:'Font Weight', desc:'Header font at normal weight.',css:'font-family: var(--font-stack-header);\nfont-weight: normal;' },
  { name:'font-body',   cat:'Fonts', sub:'Font Weight', desc:'Body font at normal weight.',  css:'font-family: var(--font-stack-body);\nfont-weight: normal;' },
  { name:'font-bold',   cat:'Fonts', sub:'Font Weight', desc:'Bold font at normal weight.',  css:'font-family: var(--font-stack-bold);\nfont-weight: normal;' },
  { name:'font-heavy',  cat:'Fonts', sub:'Font Weight', desc:'Heavy font at normal weight.', css:'font-family: var(--font-stack-heavy);\nfont-weight: normal;' },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // COLOR
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  { name:'bg-tonal1',        cat:'Color', sub:'Tonal Palette', desc:'Tonal background 1 (lightest).', css:'background-color: var(--color-tonal1);' },
  { name:'bg-tonal2',        cat:'Color', sub:'Tonal Palette', desc:'Tonal background 2.',            css:'background-color: var(--color-tonal2);' },
  { name:'bg-tonal3',        cat:'Color', sub:'Tonal Palette', desc:'Tonal background 3.',            css:'background-color: var(--color-tonal3);' },
  { name:'bg-tonal4',        cat:'Color', sub:'Tonal Palette', desc:'Tonal background 4.',            css:'background-color: var(--color-tonal4);' },
  { name:'bg-tonal5',        cat:'Color', sub:'Tonal Palette', desc:'Tonal background 5.',            css:'background-color: var(--color-tonal5);' },
  { name:'bg-tonal6',        cat:'Color', sub:'Tonal Palette', desc:'Tonal background 6.',            css:'background-color: var(--color-tonal6);' },
  { name:'bg-tonal7',        cat:'Color', sub:'Tonal Palette', desc:'Tonal background 7.',            css:'background-color: var(--color-tonal7);' },
  { name:'bg-tonal8',        cat:'Color', sub:'Tonal Palette', desc:'Tonal background 8.',            css:'background-color: var(--color-tonal8);' },
  { name:'bg-tonal9',        cat:'Color', sub:'Tonal Palette', desc:'Tonal background 9.',            css:'background-color: var(--color-tonal9);' },
  { name:'bg-tonal10',       cat:'Color', sub:'Tonal Palette', desc:'Tonal background 10 (darkest).', css:'background-color: var(--color-tonal10);' },

  { name:'bg-pink',          cat:'Color', sub:'Named Colours', desc:'Brand pink background.',          css:'background-color: var(--color-pink);' },
  { name:'bg-lightpink',     cat:'Color', sub:'Named Colours', desc:'Light pink background (#E8DED3).', css:'background-color: #E8DED3;' },
  { name:'bg-palepink',      cat:'Color', sub:'Named Colours', desc:'Pale pink background (#f3efe9).',  css:'background-color: #f3efe9;' },
  { name:'bg-yellow',        cat:'Color', sub:'Named Colours', desc:'Brand yellow background.',         css:'background-color: var(--color-yellow);' },
  { name:'bg-lighteryellow', cat:'Color', sub:'Named Colours', desc:'Lighter yellow (#e1c690).',        css:'background-color: #e1c690;' },
  { name:'bg-lightyellow',   cat:'Color', sub:'Named Colours', desc:'Light yellow (#d7b46a).',          css:'background-color: #d7b46a;' },
  { name:'bg-green',         cat:'Color', sub:'Named Colours', desc:'Brand green background.',          css:'background-color: var(--color-green);' },
  { name:'bg-lightgreen',    cat:'Color', sub:'Named Colours', desc:'Light green background (#D4DACE).', css:'background-color: #D4DACE;' },
  { name:'bg-brown',         cat:'Color', sub:'Named Colours', desc:'Brown background (#585352).',      css:'background-color: #585352;' },
  { name:'bg-red',           cat:'Color', sub:'Named Colours', desc:'Brand burnt red background.',      css:'background-color: var(--color-burnt-red);' },
  { name:'bg-blue',          cat:'Color', sub:'Named Colours', desc:'Brand blue background.',           css:'background-color: var(--color-blue);' },
  { name:'bg-footer',        cat:'Color', sub:'Named Colours', desc:'Footer background colour.',        css:'background-color: var(--color-footer-bg);' },
  { name:'bg-warmstone',     cat:'Color', sub:'Named Colours', desc:'Warm stone background.',           css:'background-color: var(--color-warm-stone);' },
  { name:'gold',             cat:'Color', sub:'Named Colours', desc:'Sets text/icon colour to brand gold.', css:'color: var(--color-gold);' },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // BORDER
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  { name:'border',        cat:'Border', sub:'Borders',       desc:'1px solid border (color variable).',    css:'border: 1px solid var(--color-border);' },
  { name:'border-bottom', cat:'Border', sub:'Borders',       desc:'1px solid bottom border.',              css:'border-bottom: 1px solid var(--color-border);' },
  { name:'border-top',    cat:'Border', sub:'Borders',       desc:'1px solid top border.',                 css:'border-top: 1px solid var(--color-border);' },
  { name:'border-gold',   cat:'Border', sub:'Borders',       desc:'Sets border colour to brand gold.',     css:'border-color: var(--color-gold);' },
  { name:'outline',       cat:'Border', sub:'Borders',       desc:'1px solid outline using current color.',css:'border: 1px solid;' },
  { name:'border-radius', cat:'Border', sub:'Border Radius', desc:'Rounded corners: 4px mobile / 8px desktop.', resp:'both', css:'border-radius: 4px;\n@media (min-width:768px) { border-radius: 8px; }' },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // LAYOUT
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  { name:'page-width',       cat:'Layout', sub:'Containers', desc:'Full viewport-width wrapper with overflow hidden.',     css:'max-width: 100vw;\nmargin: 0 auto;\noverflow: hidden;' },
  { name:'constrain',        cat:'Layout', sub:'Containers', desc:'Constrains content to 1200px max-width, centred.',      css:'max-width: 1200px;\nmargin: 0 auto;' },
  { name:'section-container',cat:'Layout', sub:'Containers', desc:'Section wrapper with responsive horizontal padding.',   css:'padding-left: 40px;\npadding-right: 40px;\n/* 20px on mobile */' },
  { name:'ratio-container',  cat:'Layout', sub:'Containers', desc:'Container for fixed aspect ratio children.',            css:'position: relative;\n/* children: position: absolute; inset: 0; */' },
  { name:'box',              cat:'Layout', sub:'Containers', desc:'Background box with placeholder styling.',              css:'background: var(--color-background);' },
  { name:'menu_space',       cat:'Layout', sub:'Offsets',    desc:'Padding-top equal to sticky header height.',            css:'padding-top: var(--header-height);' },
  { name:'jumplink',         cat:'Layout', sub:'Offsets',    desc:'Anchor offset to prevent header overlap on scroll.',    css:'padding-top: var(--header-height);\nmargin-top: calc(-1 * var(--header-height));' },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // SCROLLBAR
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  { name:'custom_scroll',   cat:'Scrollbar', sub:'Styling', desc:'Styled scrollbar with thin green accent (webkit).',  css:'::-webkit-scrollbar { width: 6px; }\n::-webkit-scrollbar-thumb { background: var(--color-green); }' },
  { name:'hide_scrollbars', cat:'Scrollbar', sub:'Styling', desc:'Hides scrollbars across all browsers.',              css:'scrollbar-width: none;\n-ms-overflow-style: none;\n::-webkit-scrollbar { display: none; }' },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // ANIMATION
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  { name:'fadein-1', cat:'Animation', sub:'Fade In', desc:'Fade in with 0.1s delay.',  css:'animation: fadeIn 0.6s ease forwards;\nanimation-delay: 0.1s;' },
  { name:'fadein-2', cat:'Animation', sub:'Fade In', desc:'Fade in with 0.2s delay.',  css:'animation: fadeIn 0.6s ease forwards;\nanimation-delay: 0.2s;' },
  { name:'fadein-3', cat:'Animation', sub:'Fade In', desc:'Fade in with 0.3s delay.',  css:'animation: fadeIn 0.6s ease forwards;\nanimation-delay: 0.3s;' },
  { name:'fadein-4', cat:'Animation', sub:'Fade In', desc:'Fade in with 0.4s delay.',  css:'animation: fadeIn 0.6s ease forwards;\nanimation-delay: 0.4s;' },
  { name:'fadein-5', cat:'Animation', sub:'Fade In', desc:'Fade in with 0.5s delay.',  css:'animation: fadeIn 0.6s ease forwards;\nanimation-delay: 0.5s;' },
  { name:'fadein-6', cat:'Animation', sub:'Fade In', desc:'Fade in with 0.6s delay (longest).',  css:'animation: fadeIn 0.6s ease forwards;\nanimation-delay: 0.6s;' },
  { name:'ding',     cat:'Animation', sub:'State',   desc:'Applied by .js parent to mark animation complete.', css:'.js .ding { /* animation end state */ }' },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // ICONS & LISTS
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  { name:'icon',                cat:'Icons & Lists', sub:'Icons', desc:'Inline-block icon, 16×16px.',                            css:'display: inline-block;\nwidth: 16px; height: 16px;' },
  { name:'icon__fallback-text', cat:'Icons & Lists', sub:'Icons', desc:'Visually hidden label for icon accessibility.',          css:'/* visually-hidden */' },
  { name:'list--inline',        cat:'Icons & Lists', sub:'Lists', desc:'Horizontal inline list, no bullets or spacing.',         css:'list-style: none;\npadding: 0; margin: 0;\ndisplay: flex;' },
];
