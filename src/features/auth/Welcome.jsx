import { Link } from "react-router-dom";
import foto_test1 from "../../assets/foto_test1.png";
import foto_test2 from "../../assets/foto_test2.png";

const Welcome = () => {
  const date = new Date();
  const today = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    year: "numeric",
  }).format(date);

  const content = (
    <>
      {/* BODY CONTENT */}
      <div className="p-4 sm:ml-64 mt-20">
        <h1>{today}</h1>
        {/* ROW 2 */}
        <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
          <div>
            <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
              Welcome to AOCapp
            </h1>
            <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
              <code className="font-mono font-semibold text-sky-500 dark:text-sky-400">
                Congratulations on joining our community
              </code>
              ! We're thrilled to have you on board. Get ready for an amazing
              experience as you explore all the exciting features we have to
              offer.
            </p>
          </div>
          <br />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="mt-4  space-y-6 text-slate-500">
              <p>
              <code className="font-mono font-semibold text-sky-500 dark:text-sky-400">
              Your beacon for revolutionizing IT network
                processes!
              </code>
                 AOCapp is ingeniously designed to automate
                standardization, facilitate centric management, and uphold ITIL
                standards. Whether you're here for effortless standardization,
                centralized network management, or seamless adherence to ITIL
                best practices, AOCapp has you covered.
                <code className="font-mono font-semibold text-sky-500 dark:text-sky-400">
                Embrace a new era of
                efficiency and precision as we empower you to elevate your IT
                operations
              </code> 
                . Explore the future of IT management with AOCapp!
                
                
                <br />
                Thank you for choosing [Your App Name]! We're here to make your
                experience extraordinary.
                <br />
                Happy exploring!
                <br />
                The [Your App Name] Team
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>

      <section id="editor-tools">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="w-16 h-16 p-[0.1875rem] rounded-full ring-1 ring-slate-900/10 shadow overflow-hidden dark:bg-sky-500 dark:highlight-white/20">
            {/* <div
              className="aspect-w-1 aspect-h-1 bg-[length:100%] dark:hidden"
              style="background-image:url(/_next/static/media/editor-tools.c0474b65.png)"
            ></div> */}
            <img src={foto_test1} alt="mockup" className='aspect-w-1 aspect-h-1 bg-[length:100%] dark:hidden'/>

            {/* <div
              className="hidden aspect-w-1 aspect-h-1 bg-[length:100%] dark:block"
              style="background-image:url(/_next/static/media/editor-tools.f4b248f3.png)"
            ></div> */}
            <img src={foto_test2} alt="mockup" className='hidden aspect-w-1 aspect-h-1 bg-[length:100%] dark:block'/>
          </div>
          <h2 className="mt-8 font-semibold text-sky-500">Check this out</h2>

          <p className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50 ">
          🤔 Need help or have questions?
          </p>

          <div className="mt-4 max-w-3xl space-y-6 text-slate-500">
            <p>
            Check out our FAQs or reach out
                to our support team at 
                <code className="font-mono font-semibold text-sky-500 dark:text-sky-400">
                [alvarooliverc@gmail.com].
              </code> 
                
            </p>

            <p>
            📢 We value your feedback! Your input helps us enhance AOCapp. Share your thoughts through the app or join the
                conversation in our community.
            </p>
          </div>
          <a
          href="mailto:alvarooliverc@gmail.com"
            className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap 
            px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 hover:bg-sky-100 hover:text-sky-700 focus:ring-sky-600
             dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-8 cursor-pointer"
          >
            Send us an email
            <span className="sr-only">, editor setup</span>
            <svg
              className="overflow-visible ml-3 text-sky-300 group-hover:text-sky-400 dark:text-slate-500 dark:group-hover:text-slate-400"
              width="3"
              height="6"
              viewBox="0 0 3 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0 0L3 3L0 6"></path>
            </svg>
          </a>
        </div>

        {/* <div className="relative pt-10 xl:pt-0 mt-10">
          <div className="hidden dark:block absolute top-0 inset-x-0 h-[37.5rem] bg-gradient-to-b from-[#0c1120] top-0 xl:top-8"></div>

          <div className="absolute top-0 inset-x-0 bg-top bg-no-repeat GridLockup_beams-7__fKBjN top-0 xl:top-8"></div>

          <div className="absolute top-0 inset-x-0 h-[37.5rem] bg-grid-slate-900/[0.04] bg-top [mask-image:linear-gradient(0deg,transparent,black)] dark:bg-grid-slate-100/[0.03] dark:bg-[center_top_-1px] dark:border-t dark:border-slate-100/5 top-0 xl:top-8"></div>

          <div className="max-w-7xl mx-auto sm:px-6 md:px-8">
            <div className="relative">
              <img
                decoding="async"
                src="/_next/static/media/overlay.a588a288.webp"
                alt=""
                className="absolute z-10 bottom-0 -left-80 w-[45.0625rem] pointer-events-none dark:hidden"
              />

              <div className="relative overflow-hidden shadow-xl flex bg-slate-800 h-[31.625rem] max-h-[60vh] sm:max-h-[none] sm:rounded-xl lg:h-[34.6875rem] xl:h-[31.625rem] dark:bg-slate-900/70 dark:backdrop-blur dark:ring-1 dark:ring-inset dark:ring-white/10 !h-[39.0625rem]">
                <div className="relative w-full flex flex-col">
                  <div className="flex-none border-b border-slate-500/30">
                    <div className="flex items-center h-8 space-x-1.5 px-3">
                      <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>

                      <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>

                      <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                    </div>
                  </div>

                  <div className="relative min-h-0 flex-auto flex flex-col">
                    <div className="flex-auto flex min-h-0">
                      <div className="hidden sm:flex flex-none w-14 border-r border-slate-500/30 flex-col items-center justify-between pt-3.5 pb-4">
                        <svg width="24" height="216" fill="none">
                          <path
                            d="M3 69l6-6m-2-5a7 7 0 1014 0 7 7 0 00-14 0z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>

                          <path
                            d="M8 7H5a1 1 0 00-1 1v12a1 1 0 001 1h10a1 1 0 001-1v-3m3.707-10.293l-3.414-3.414A1 1 0 0015.586 3H9a1 1 0 00-1 1v12a1 1 0 001 1h10a1 1 0 001-1V7.414a1 1 0 00-.293-.707zM7 103a2 2 0 100-4 2 2 0 000 4zm0 0v10m10-6a2 2 0 100-4 2 2 0 000 4zm0 0a3 3 0 01-3 3h-4a3 3 0 00-3 3m0 0a2 2 0 100 4 2 2 0 000-4z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          ></path>

                          <path
                            d="M11.5 160.031a.75.75 0 00-1-1.118l1 1.118zm-8-1.118a.75.75 0 00-1 1.118l1-1.118zm6.972 6.149a.75.75 0 10.993-1.124l-.993 1.124zm-7.937-1.124a.75.75 0 10.993 1.124l-.993-1.124zm7.022-.368l-.64-.393.64.393zm-5.114 0l.64-.393-.64.393zM3 161.25a.75.75 0 000 1.5v-1.5zm8 1.5a.75.75 0 000-1.5v1.5zM8 147l.372-.651A.75.75 0 007.25 147H8zm14 8l.372.651a.75.75 0 000-1.302L22 155zm-14.75 0a.75.75 0 001.5 0h-1.5zm5.378 4.492a.75.75 0 10.744 1.302l-.744-1.302zM7 157.75A2.25 2.25 0 019.25 160h1.5A3.75 3.75 0 007 156.25v1.5zm0-1.5A3.75 3.75 0 003.25 160h1.5A2.25 2.25 0 017 157.75v-1.5zm2.624 3.298A5.225 5.225 0 017 160.25v1.5a6.73 6.73 0 003.376-.903l-.752-1.299zM9.25 160v.197h1.5V160h-1.5zm0 .197V162h1.5v-1.803h-1.5zM7 160.25a5.225 5.225 0 01-2.624-.702l-.752 1.299A6.73 6.73 0 007 161.75v-1.5zM4.75 162v-1.803h-1.5V162h1.5zm0-1.803V160h-1.5v.197h1.5zm5.75-1.284a5.209 5.209 0 01-.876.635l.752 1.299c.403-.234.78-.507 1.124-.816l-1-1.118zm-6.124.635a5.21 5.21 0 01-.876-.635l-1 1.118c.344.309.721.582 1.124.816l.752-1.299zm4.86 4.701c.451.212.867.487 1.236.813l.993-1.124a6.77 6.77 0 00-1.588-1.046l-.64 1.357zM9.25 162c0 .433-.122.835-.332 1.177l1.277.787A3.737 3.737 0 0010.75 162h-1.5zm-.332 1.177A2.247 2.247 0 017 164.25v1.5a3.748 3.748 0 003.195-1.786l-1.277-.787zm-5.39 1.885a5.25 5.25 0 011.235-.813l-.64-1.357a6.77 6.77 0 00-1.588 1.046l.993 1.124zM7 164.25c-.81 0-1.52-.427-1.918-1.073l-1.277.787A3.748 3.748 0 007 165.75v-1.5zm-1.918-1.073A2.235 2.235 0 014.75 162h-1.5c0 .719.203 1.392.555 1.964l1.277-.787zM4 161.25H3v1.5h1v-1.5zm7 0h-1v1.5h1v-1.5zm-3.372-13.599l14 8 .744-1.302-14-8-.744 1.302zM8.75 155v-8h-1.5v8h1.5zm12.878-.651l-9 5.143.744 1.302 9-5.143-.744-1.302z"
                            fill="currentColor"
                          ></path>

                          <path
                            d="M3 205h8m-8 0v7a1 1 0 001 1h7m-8-8v-7a1 1 0 011-1h6a1 1 0 011 1v7m0 0v8m0-8h7a1 1 0 011 1v6a1 1 0 01-1 1h-7m4-11h6a1 1 0 001-1v-6a1 1 0 00-1-1h-6a1 1 0 00-1 1v6a1 1 0 001 1z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          ></path>
                        </svg>
                        <svg width="24" height="72" fill="none">
                          <path
                            d="M10.325 52.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>

                          <path
                            d="M15 60a3 3 0 11-6 0 3 3 0 016 0zM5.121 17.804A13.936 13.936 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>

                      <div className="flex-auto flex flex-col min-w-0">
                        <div className="overflow-hidden w-full flex-auto flex min-h-0">
                          <div className="w-full relative flex-auto">
                            <pre className="flex min-h-full text-sm leading-6">
                              <div
                                aria-hidden="true"
                                className="hidden md:block text-slate-600 flex-none py-4 pr-4 text-right select-none w-[3.125rem]"
                              >
                                1<br />2<br />3<br />4<br />5<br />6<br />7
                                <br />8<br />9<br />
                                10
                                <br />
                                11
                                <br />
                                12
                                <br />
                                13
                                <br />
                                14
                                <br />
                                15
                                <br />
                                16
                                <br />
                                17
                                <br />
                                18
                                <br />
                                19
                                <br />
                                20
                                <br />
                                21
                                <br />
                                22
                                <br />
                                23
                                <br />
                                24
                              </div>
                              <code className="flex-auto relative block text-slate-50 p-4">
                                <span className="tag punctuation token">&lt;</span>

                                <span className="tag token">div</span>

                                <span className="tag token"></span>

                                <span className="tag attr-name token">class</span>

                                <span className="tag attr-value punctuation attr-equals token">
                                  =
                                </span>

                                <span className="tag attr-value punctuation token">
                                  &quot;
                                </span>

                                <span className="tag attr-value token">
                                  <span className="inline-flex bg-squiggle bg-repeat-x bg-left-bottom">
                                    flex
                                  </span>

                                  <span className="inline-flex bg-squiggle bg-repeat-x bg-left-bottom">
                                    block
                                  </span>
                                </span>

                                <span className="tag attr-value punctuation token">
                                  &quot;
                                </span>

                                <span className="tag punctuation token">&gt;</span>

                                <span></span>

                                <span></span>

                                <span className="tag punctuation token">&lt;</span>

                                <span className="tag token">div</span>

                                <span className="tag token"></span>

                                <span className="tag attr-name token">class</span>

                                <span className="tag attr-value punctuation attr-equals token">
                                  =
                                </span>

                                <span className="tag attr-value punctuation token">
                                  &quot;
                                </span>

                                <span className="tag attr-value token">
                                  flex-1 truncate
                                </span>

                                <span className="tag attr-value punctuation token">
                                  &quot;
                                </span>

                                <span className="tag punctuation token">&gt;</span>

                                <span></span>

                                <span></span>

                                <span className="tag punctuation token">&lt;</span>

                                <span className="tag token">div</span>

                                <span className="tag token"></span>

                                <span className="tag attr-name token">class</span>

                                <span className="tag attr-value punctuation attr-equals token">
                                  =
                                </span>

                                <span className="tag attr-value punctuation token">
                                  &quot;
                                </span>

                                <span className="tag attr-value token">
                                  flex items-center space-x-3
                                </span>

                                <span className="tag attr-value punctuation token">
                                  &quot;
                                </span>

                                <span className="tag punctuation token">&gt;</span>

                                <span></span>

                                <span></span>

                                <span className="tag punctuation token">&lt;</span>

                                <span className="tag token">h3</span>

                                <span className="tag token"></span>

                                <span className="tag attr-name token">class</span>

                                <span className="tag attr-value punctuation attr-equals token">
                                  =
                                </span>

                                <span className="tag attr-value punctuation token">
                                  &quot;
                                </span>

                                <span className="tag attr-value token">
                                  <span
                                    className="inline-flex w-3 h-3 rounded ring-1 ring-slate-900/30 relative top-px mr-1"
                                    style="background:#0f172a"
                                  ></span>
                                  text-slate-900 text-sm font-medium truncate
                                </span>

                                <span className="tag attr-value punctuation token">
                                  &quot;
                                </span>

                                <span className="tag punctuation token">&gt;</span>

                                <span>Jane Cooper</span>

                                <span className="tag punctuation token">&lt;/</span>

                                <span className="tag token">h3</span>

                                <span className="tag punctuation token">&gt;</span>

                                <span></span>

                                <span></span>

                                <span className="tag punctuation token">&lt;</span>

                                <span className="tag token">span</span>

                                <span className="tag token"></span>

                                <span className="tag attr-name token">class</span>

                                <span className="tag attr-value punctuation attr-equals token">
                                  =
                                </span>

                                <span className="tag attr-value punctuation token">
                                  &quot;
                                </span>

                                <span className="token attr-value">
                                  <span className="hidden sm:inline-flex items-baseline">
                                    <span
                                      className="inline-flex w-3 h-3 rounded ring-1 ring-slate-900/30 relative top-px mr-1"
                                      style="background:#0d9488"
                                    ></span>
                                    text-teal-600
                                  </span>

                                  <span className="border -mx-px h-5"></span>
                                </span>

                                <span className="tag attr-value punctuation token">
                                  &quot;
                                </span>

                                <span className="tag punctuation token">&gt;</span>

                                <span>Admin</span>

                                <span className="tag punctuation token">&lt;/</span>

                                <span className="tag token">span</span>

                                <span className="tag punctuation token">&gt;</span>

                                <span></span>

                                <span></span>

                                <span className="tag punctuation token">&lt;/</span>

                                <span className="tag token">div</span>

                                <span className="tag punctuation token">&gt;</span>

                                <span></span>

                                <span></span>

                                <span className="tag punctuation token">&lt;</span>

                                <span className="tag token">p</span>

                                <span className="tag token"></span>

                                <span className="tag attr-name token">class</span>

                                <span className="tag attr-value punctuation attr-equals token">
                                  =
                                </span>

                                <span className="tag attr-value punctuation token">
                                  &quot;
                                </span>

                                <span className="tag attr-value token">
                                  mt-1
                                  <span
                                    className="inline-flex w-3 h-3 rounded ring-1 ring-slate-900/30 relative top-px mr-1"
                                    style="background:#64748b"
                                  ></span>
                                  text-slate-500 text-sm truncate
                                </span>

                                <span className="tag attr-value punctuation token">
                                  &quot;
                                </span>

                                <span className="tag punctuation token">&gt;</span>

                                <span>Regional Paradigm Technician</span>

                                <span className="tag punctuation token">&lt;/</span>

                                <span className="tag token">p</span>

                                <span className="tag punctuation token">&gt;</span>

                                <span></span>

                                <span></span>

                                <span className="tag punctuation token">&lt;/</span>

                                <span className="tag token">div</span>

                                <span className="tag punctuation token">&gt;</span>

                                <span></span>

                                <span></span>

                                <span className="tag punctuation token">&lt;</span>

                                <span className="tag token">img</span>

                                <span className="tag token"></span>

                                <span className="tag attr-name token">class</span>

                                <span className="tag attr-value punctuation attr-equals token">
                                  =
                                </span>

                                <span className="tag attr-value punctuation token">
                                  &quot;
                                </span>

                                <span className="tag attr-value token">
                                  w-10 h-10
                                  <span
                                    className="inline-flex w-3 h-3 rounded ring-1 ring-slate-900/30 relative top-px mr-1"
                                    style="background:#cbd5e1"
                                  ></span>
                                  bg-slate-300 rounded-full shrink-0
                                </span>

                                <span className="tag attr-value punctuation token">
                                  &quot;
                                </span>

                                <span className="tag token"></span>

                                <span className="tag attr-name token">src</span>

                                <span className="tag attr-value punctuation attr-equals token">
                                  =
                                </span>

                                <span className="tag attr-value punctuation token">
                                  &quot;
                                </span>

                                <span className="tag attr-value token">
                                  https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1
                                </span>

                                <span className="tag attr-value entity named-entity token">
                                  &amp;amp;
                                </span>

                                <span className="tag attr-value token">
                                  ixid=eyJhcHBfaWQiOjEyMDd9
                                </span>

                                <span className="tag attr-value entity named-entity token">
                                  &amp;amp;
                                </span>

                                <span className="tag attr-value token">
                                  auto=format
                                </span>

                                <span className="tag attr-value entity named-entity token">
                                  &amp;amp;
                                </span>

                                <span className="tag attr-value token">
                                  fit=facearea
                                </span>

                                <span className="tag attr-value entity named-entity token">
                                  &amp;amp;
                                </span>

                                <span className="tag attr-value token">
                                  facepad=4
                                </span>

                                <span className="tag attr-value entity named-entity token">
                                  &amp;amp;
                                </span>

                                <span className="tag attr-value token">w=256</span>

                                <span className="tag attr-value entity named-entity token">
                                  &amp;amp;
                                </span>

                                <span className="tag attr-value token">h=256</span>

                                <span className="tag attr-value entity named-entity token">
                                  &amp;amp;
                                </span>

                                <span className="tag attr-value token">q=60</span>

                                <span className="tag attr-value punctuation token">
                                  &quot;
                                </span>

                                <span className="tag token"></span>

                                <span className="tag attr-name token">alt</span>

                                <span className="tag attr-value punctuation attr-equals token">
                                  =
                                </span>

                                <span className="tag attr-value punctuation token">
                                  &quot;
                                </span>

                                <span className="tag attr-value punctuation token">
                                  &quot;
                                </span>

                                <span className="tag token"></span>

                                <span className="tag attr-name token">loading</span>

                                <span className="tag attr-value punctuation attr-equals token">
                                  =
                                </span>

                                <span className="tag attr-value punctuation token">
                                  &quot;
                                </span>

                                <span className="tag attr-value token">lazy</span>

                                <span className="tag attr-value punctuation token">
                                  &quot;
                                </span>

                                <span className="tag punctuation token">&gt;</span>

                                <span></span>

                                <span></span>

                                <span className="tag punctuation token">&lt;/</span>

                                <span className="tag token">div</span>

                                <span className="tag punctuation token">&gt;</span>

                                <span></span>

                                <span></span>

                                <span className="tag punctuation token">&lt;</span>

                                <span className="tag token">div</span>

                                <span className="tag token"></span>

                                <span className="tag attr-name token">class</span>

                                <span className="tag attr-value punctuation attr-equals token">
                                  =
                                </span>

                                <span className="tag attr-value punctuation token">
                                  &quot;
                                </span>

                                <span className="tag attr-value token">
                                  border-t
                                  <span
                                    className="inline-flex w-3 h-3 rounded ring-1 ring-slate-900/30 relative top-px mr-1"
                                    style="background:#e2e8f0"
                                  ></span>
                                  border-slate-200
                                </span>

                                <span className="tag attr-value punctuation token">
                                  &quot;
                                </span>

                                <span className="tag punctuation token">&gt;</span>

                                <span></span>

                                <span></span>

                                <span className="tag punctuation token">&lt;</span>

                                <span className="tag token">div</span>

                                <span className="tag token"></span>

                                <span className="tag attr-name token">class</span>

                                <span className="tag attr-value punctuation attr-equals token">
                                  =
                                </span>

                                <span className="tag attr-value punctuation token">
                                  &quot;
                                </span>

                                <span className="tag attr-value token">
                                  -mt-px flex
                                </span>

                                <span className="tag attr-value punctuation token">
                                  &quot;
                                </span>

                                <span className="tag punctuation token">&gt;</span>

                                <span></span>

                                <span></span>

                                <span className="tag punctuation token">&lt;</span>

                                <span className="tag token">div</span>

                                <span className="tag token"></span>

                                <span className="tag attr-name token">class</span>

                                <span className="tag attr-value punctuation attr-equals token">
                                  =
                                </span>

                                <span className="tag attr-value punctuation token">
                                  &quot;
                                </span>

                                <span className="tag attr-value token">
                                  w-0 flex-1 flex border-r
                                  <span
                                    className="inline-flex w-3 h-3 rounded ring-1 ring-slate-900/30 relative top-px mr-1"
                                    style="background:#e2e8f0"
                                  ></span>
                                  border-slate-200
                                </span>

                                <span className="tag attr-value punctuation token">
                                  &quot;
                                </span>

                                <span className="tag punctuation token">&gt;</span>

                                <span></span>

                                <span></span>

                                <span className="tag punctuation token">&lt;</span>

                                <span className="tag token">a</span>

                                <span className="tag token"></span>

                                <span className="tag attr-name token">href</span>

                                <span className="tag attr-value punctuation attr-equals token">
                                  =
                                </span>

                                <span className="tag attr-value punctuation token">
                                  &quot;
                                </span>

                                <span className="tag attr-value token">#</span>

                                <span className="tag attr-value punctuation token">
                                  &quot;
                                </span>

                                <span className="tag token"></span>

                                <span className="tag attr-name token">class</span>

                                <span className="tag attr-value punctuation attr-equals token">
                                  =
                                </span>

                                <span className="tag attr-value punctuation token">
                                  &quot;
                                </span>

                                <span className="tag attr-value token">
                                  relative -mr-px w-0 flex-1 inline-flex
                                  items-center justify-center py-4 text-sm
                                  <span
                                    className="inline-flex w-3 h-3 rounded ring-1 ring-slate-900/30 relative top-px mr-1"
                                    style="background:#334155"
                                  ></span>
                                  text-slate-700 font-medium border
                                  <span
                                    className="inline-flex w-3 h-3 rounded ring-1 ring-slate-900/30 relative top-px mr-1"
                                    style="background:transparent"
                                  ></span>
                                  border-transparent rounded-bl-lg
                                  hover:text-slate-500 focus:outline-none
                                  focus:shadow-outline-blue
                                  focus:border-blue-300 focus:z-10 transition
                                  ease-in-out duration-150
                                </span>

                                <span className="tag attr-value punctuation token">
                                  &quot;
                                </span>

                                <span className="tag punctuation token">&gt;</span>

                                <span></span>

                                <span></span>

                                <span className="tag punctuation token">&lt;</span>

                                <span className="tag token">svg</span>

                                <span className="tag token"></span>

                                <span className="tag attr-name token">class</span>

                                <span className="tag attr-value punctuation attr-equals token">
                                  =
                                </span>

                                <span className="tag attr-value punctuation token">
                                  &quot;
                                </span>

                                <span className="tag attr-value token">
                                  w-5 h-5
                                  <span
                                    className="inline-flex w-3 h-3 rounded ring-1 ring-slate-900/30 relative top-px mr-1"
                                    style="background:#94a3b8"
                                  ></span>
                                  text-slate-400
                                </span>

                                <span className="tag attr-value punctuation token">
                                  &quot;
                                </span>

                                <span className="tag token"></span>

                                <span className="tag attr-name token">xmlns</span>

                                <span className="tag attr-value punctuation attr-equals token">
                                  =
                                </span>

                                <span className="tag attr-value punctuation token">
                                  &quot;
                                </span>

                                <span className="tag attr-value token">
                                  http://www.w3.org/2000/svg
                                </span>

                                <span className="tag attr-value punctuation token">
                                  &quot;
                                </span>

                                <span className="tag token"></span>

                                <span className="tag attr-name token">viewBox</span>

                                <span className="tag attr-value punctuation attr-equals token">
                                  =
                                </span>

                                <span className="tag attr-value punctuation token">
                                  &quot;
                                </span>

                                <span className="tag attr-value token">
                                  0 0 20 20
                                </span>

                                <span className="tag attr-value punctuation token">
                                  &quot;
                                </span>

                                <span className="tag token"></span>

                                <span className="tag attr-name token">fill</span>

                                <span className="tag attr-value punctuation attr-equals token">
                                  =
                                </span>

                                <span className="tag attr-value punctuation token">
                                  &quot;
                                </span>

                                <span className="tag attr-value token">
                                  currentColor
                                </span>

                                <span className="tag attr-value punctuation token">
                                  &quot;
                                </span>

                                <span className="tag punctuation token">&gt;</span>

                                <span></span>

                                <span></span>

                                <span className="tag punctuation token">&lt;</span>

                                <span className="tag token">path</span>

                                <span className="tag token"></span>

                                <span className="tag attr-name token">d</span>

                                <span className="tag attr-value punctuation attr-equals token">
                                  =
                                </span>

                                <span className="tag attr-value punctuation token">
                                  &quot;
                                </span>

                                <span className="tag attr-value token">
                                  M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016
                                  4H4a2 2 0 00-1.997 1.884z
                                </span>

                                <span className="tag attr-value punctuation token">
                                  &quot;
                                </span>

                                <span className="tag token"></span>

                                <span className="tag punctuation token">/&gt;</span>

                                <span></span>

                                <span></span>

                                <span className="tag punctuation token">&lt;</span>

                                <span className="tag token">path</span>

                                <span className="tag token"></span>

                                <span className="tag attr-name token">d</span>

                                <span className="tag attr-value punctuation attr-equals token">
                                  =
                                </span>

                                <span className="tag attr-value punctuation token">
                                  &quot;
                                </span>

                                <span className="tag attr-value token">
                                  M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0
                                  002-2V8.118z
                                </span>

                                <span className="tag attr-value punctuation token">
                                  &quot;
                                </span>

                                <span className="tag token"></span>

                                <span className="tag punctuation token">/&gt;</span>

                                <span></span>

                                <span></span>

                                <span className="tag punctuation token">&lt;/</span>

                                <span className="tag token">svg</span>

                                <span className="tag punctuation token">&gt;</span>

                                <span></span>

                                <span></span>

                                <span className="tag punctuation token">&lt;</span>

                                <span className="tag token">span</span>

                                <span className="tag token"></span>

                                <span className="tag attr-name token">class</span>

                                <span className="tag attr-value punctuation attr-equals token">
                                  =
                                </span>

                                <span className="tag attr-value punctuation token">
                                  &quot;
                                </span>

                                <span className="tag attr-value token">ml-3</span>

                                <span className="tag attr-value punctuation token">
                                  &quot;
                                </span>

                                <span className="tag punctuation token">&gt;</span>

                                <span>Email</span>

                                <span className="tag punctuation token">&lt;/</span>

                                <span className="tag token">span</span>

                                <span className="tag punctuation token">&gt;</span>

                                <span></span>

                                <span></span>

                                <span className="tag punctuation token">&lt;/</span>

                                <span className="tag token">a</span>

                                <span className="tag punctuation token">&gt;</span>

                                <span></span>

                                <span></span>

                                <span className="tag punctuation token">&lt;/</span>

                                <span className="tag token">div</span>

                                <span className="tag punctuation token">&gt;</span>

                                <span></span>

                                <span></span>

                                <span className="tag punctuation token">&lt;/</span>

                                <span className="tag token">div</span>

                                <span className="tag punctuation token">&gt;</span>

                                <span></span>

                                <span></span>

                                <span className="tag punctuation token">&lt;/</span>

                                <span className="tag token">div</span>

                                <span className="tag punctuation token">&gt;</span>

                                <span></span>

                                <span className="inline-block"></span>
                              </code>
                            </pre>
                          </div>
                        </div>

                        <div className="border-t border-slate-500/30 font-mono text-xs leading-6 text-slate-200 p-4 space-y-2">
                          <h3>Problems</h3>
                          <ul className="space-y-1 text-slate-300">
                            <li className="flex min-w-0">
                              <svg
                                width="24"
                                height="24"
                                fill="none"
                                className="flex-none text-yellow-400"
                              >
                                <path
                                  d="m5.207 16.203 5.072-10.137c.711-1.422 2.736-1.421 3.447 0l5.067 10.137c.642 1.285-.29 2.797-1.723 2.797H6.93c-1.434 0-2.366-1.513-1.723-2.797ZM12 10v2"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>

                                <path
                                  d="M12.5 16a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
                                  stroke="currentColor"
                                ></path>
                              </svg>

                              <p className="truncate ml-1">
                                &#x27;flex&#x27; applies the same CSS property
                                as &#x27;block&#x27;.
                              </p>

                              <p className="hidden sm:block flex-none text-slate-500">
                                cssConflict [1, 20]
                              </p>
                            </li>
                            <li className="flex min-w-0">
                              <svg
                                width="24"
                                height="24"
                                fill="none"
                                className="flex-none text-yellow-400"
                              >
                                <path
                                  d="m5.207 16.203 5.072-10.137c.711-1.422 2.736-1.421 3.447 0l5.067 10.137c.642 1.285-.29 2.797-1.723 2.797H6.93c-1.434 0-2.366-1.513-1.723-2.797ZM12 10v2"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>

                                <path
                                  d="M12.5 16a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
                                  stroke="currentColor"
                                ></path>
                              </svg>

                              <p className="truncate ml-1">
                                &#x27;block&#x27; applies the same CSS property
                                as &#x27;flex&#x27;.
                              </p>

                              <p className="hidden sm:block flex-none text-slate-500"></p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
  return content;
};

export default Welcome;
