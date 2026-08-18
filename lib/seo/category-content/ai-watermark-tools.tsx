import Link from 'next/link';
import type { CategoryContent } from './types';
import type { FaqItem } from '@/components/faqData';

function Intro() {
  return (
    <>
      <p>
        <strong>AI watermark tools</strong> detect and remove the watermarks embedded in images and video
        produced by generative models. This category collects a full set of tools covering the major image
        generators, including{' '}
        <Link href="/dalle-image-watermark-detector">DALL-E</Link>,{' '}
        <Link href="/midjourney-image-watermark-remover">Midjourney</Link>,{' '}
        <Link href="/adobe-firefly-image-watermark-detector">Adobe Firefly</Link>,{' '}
        <Link href="/stable-diffusion-watermark-remover">Stable Diffusion</Link>,{' '}
        <Link href="/gemini-image-watermark-remover">Gemini</Link>, and{' '}
        <Link href="/imagen-image-watermark-remover">Imagen</Link>, alongside video tools for{' '}
        <Link href="/sora-video-watermark-detector">Sora</Link>,{' '}
        <Link href="/veo-video-watermark-detector">Veo</Link>,{' '}
        <Link href="/runway-video-watermark-remover">Runway</Link>, and{' '}
        <Link href="/heygen-video-watermark-remover">HeyGen</Link>.
      </p>
      <p>
        Unlike text, where claimed AI watermarking is largely theoretical, image and video watermarking is
        real, deployed at scale, and technically sophisticated. Google&apos;s{' '}
        <Link href="/synthid-image-watermark-remover">SynthID</Link> embeds an invisible signal directly
        into pixel data. C2PA content credentials attach cryptographically signed provenance metadata.
        Some generators add visible marks as well.
      </p>
      <p>
        Because these tools touch questions of provenance and disclosure, this page covers what each
        watermark type actually is, how the major generators differ in what they apply, why video is a
        harder problem than still images, what detection can and cannot establish, what other verification
        signals exist alongside watermarks, and the legal and ethical constraints that apply. Those constraints are real: several jurisdictions now require AI content
        disclosure, and removing a provenance signal to misrepresent generated content is a different act
        from removing a visible logo from your own licensed output.
      </p>
    </>
  );
}

function Body() {
  return (
    <>
      <h2>The Three Kinds of AI Watermark</h2>
      <p>
        These are entirely different technologies with different purposes, and conflating them causes most
        of the confusion in this area.
      </p>
      <h3>Visible Watermarks</h3>
      <p>
        A visible watermark is a logo, text, or pattern overlaid on the image. Historically DALL-E added a
        colored stripe in the corner, and many video generators add a logo or an outro frame, particularly
        on free tiers. Their purpose is branding and tier differentiation rather than provenance: they
        advertise the tool and give users a reason to upgrade.
      </p>
      <p>
        Visible watermarks are the easiest to remove and the least meaningful to remove, because they
        carry no verifiable information. Removing one does not change what the image is.
      </p>
      <h3>Invisible Watermarks</h3>
      <p>
        Invisible watermarks embed a signal in the pixel data itself. Google&apos;s SynthID is the
        prominent example, applied across Imagen, Veo, and Gemini image generation. The signal is
        distributed across the image in a way that survives common transformations, including
        resizing, cropping, compression, color adjustment, and screenshotting.
      </p>
      <p>
        This robustness is the design goal. A watermark defeated by saving as JPEG would be useless, so
        SynthID is engineered to persist through the operations images normally undergo. It is detectable
        only with the corresponding verification tool, which means the signal is present in a great many
        images whose holders have no way to check.
      </p>
      <h3>Metadata and Content Credentials</h3>
      <p>
        C2PA content credentials, backed by Adobe, Microsoft, and others, attach cryptographically signed
        metadata recording what generated an asset and what edits followed. Adobe Firefly applies these by
        default.
      </p>
      <p>
        Metadata is the most informative and the most fragile of the three. It records real provenance
        detail, but it lives alongside the image rather than inside the pixels, so it is stripped by most
        social platforms on upload, by screenshotting, and by many conversion tools. Its absence therefore
        proves nothing: an image with no credentials may be a photograph, a generated image whose metadata
        was stripped, or a generated image from a tool that never added any.
      </p>

      <h2>Watermark Detection: What It Can and Cannot Tell You</h2>
      <p>
        The detection tools in this category, including the{' '}
        <Link href="/chatgpt-image-watermark-detector">ChatGPT image watermark detector</Link>,{' '}
        <Link href="/dalle-image-watermark-detector">DALL-E detector</Link>,{' '}
        <Link href="/sora-image-watermark-detector">Sora detector</Link>,{' '}
        <Link href="/grok-image-watermark-detector">Grok detector</Link>, and{' '}
        <Link href="/adobe-firefly-video-watermark-detector">Adobe Firefly video detector</Link>, inspect
        an asset for the signals described above.
      </p>
      <p>
        <strong>A positive result is strong evidence.</strong> If a verifiable watermark or valid signed
        credential is present, the asset almost certainly came from the tool that applied it.
        Cryptographic signatures are hard to forge, which is what makes this approach fundamentally more
        reliable than the statistical inference used for text detection.
      </p>
      <p>
        <strong>A negative result establishes very little.</strong> This asymmetry is the single most
        important thing to understand here. No watermark found may mean the image is a photograph, or that
        it came from a generator applying no watermark, or that the metadata was stripped by a platform
        upload, or that the detector cannot read that particular scheme. Absence of evidence is not
        evidence of absence, and treating a clean result as proof of authenticity is a mistake.
      </p>
      <p>
        <strong>Detection is provider-specific.</strong> Verifying SynthID requires Google&apos;s
        verification path. Reading C2PA credentials requires C2PA-aware tooling. There is no universal
        detector that reliably identifies every watermarking scheme, and coverage varies by generator.
      </p>

      <h2>Watermark Removal: Legitimate Uses and Real Limits</h2>
      <p>
        The removal tools in this category, including the{' '}
        <Link href="/midjourney-image-watermark-remover">Midjourney watermark remover</Link>,{' '}
        <Link href="/stable-diffusion-watermark-remover">Stable Diffusion watermark remover</Link>,{' '}
        <Link href="/runway-video-watermark-remover">Runway video watermark remover</Link>, and{' '}
        <Link href="/heygen-video-watermark-remover">HeyGen video watermark remover</Link>, address
        visible overlays.
      </p>
      <p>
        <strong>Legitimate uses are real and common.</strong> Removing a tool&apos;s branding logo from
        output you generated and hold rights to is ordinary practice, and many paid tiers remove it
        automatically. Cleaning a visible mark from your own licensed commercial output, removing a
        platform logo from content you produced for your own channel, and stripping branding from assets
        you are compositing into a larger design are all normal design work.
      </p>
      <p>
        <strong>What removal cannot do</strong> is more limited than people expect. Visible overlay removal
        works by reconstructing the obscured region, which succeeds well over uniform areas and degrades
        over detailed ones. More importantly, removing a visible mark does not remove an invisible
        watermark. SynthID persists through the operations these tools perform, so an image whose logo has
        been cleaned may still carry a verifiable generation signal.
      </p>
      <p>
        This distinction matters practically. If your reason for removing a watermark depends on the
        result being unattributable, visible removal does not achieve that, and assuming otherwise is a
        mistake with real consequences.
      </p>
      <p>
        <strong>Reconstruction quality depends heavily on what was covered.</strong> A logo over an
        untextured background such as sky, a plain wall, or a shallow-depth-of-field blur can usually be
        removed without any visible trace, because the surrounding pixels contain enough information to
        infer what was underneath. A mark sitting over foliage, patterned fabric, architectural detail, or
        a face is a much harder problem, and the result frequently looks smeared or subtly wrong in a way
        viewers notice without identifying why.
      </p>
      <p>
        <strong>Larger marks are disproportionately harder.</strong> The difficulty scales with the area
        being invented rather than linearly with size, since a bigger region means less surrounding
        context relative to what must be reconstructed. A small corner logo and a mark spanning a third of
        the frame are qualitatively different problems, not the same problem at different scales.
      </p>
      <p>
        <strong>Repeated processing compounds damage.</strong> Each removal-and-resave cycle introduces
        compression loss on top of reconstruction error. Working from the highest-quality source available
        and processing once produces a materially better result than iterating on an already-processed
        file.
      </p>

      <h2>Watermarking by Generator</h2>
      <p>
        Provider approaches differ substantially, and knowing which applies to your source material
        determines what any detection or removal step can achieve.
      </p>
      <h3>Google: Imagen, Veo, and Gemini</h3>
      <p>
        Google applies SynthID across its generative image and video products, making it the most
        thoroughly watermarked ecosystem currently deployed. The{' '}
        <Link href="/imagen-image-watermark-remover">Imagen</Link>,{' '}
        <Link href="/veo-video-watermark-detector">Veo</Link>, and{' '}
        <Link href="/gemini-image-watermark-remover">Gemini</Link> tools address output from these
        systems. Because the watermark is embedded rather than attached, Google output carries a
        verifiable signal even after the file has been recompressed, cropped, or screenshotted.
      </p>
      <h3>OpenAI: DALL-E and Sora</h3>
      <p>
        OpenAI has used visible marks at various points and applies C2PA content credentials to image
        output. The <Link href="/dalle-image-watermark-remover">DALL-E</Link>,{' '}
        <Link href="/chatgpt-image-watermark-remover">ChatGPT image</Link>, and{' '}
        <Link href="/sora-video-watermark-remover">Sora video</Link> tools cover these. Sora video has
        carried a visible moving watermark, which is harder to remove cleanly than a static corner mark
        because its position changes across frames.
      </p>
      <h3>Adobe Firefly</h3>
      <p>
        Firefly applies C2PA credentials by default and Adobe has been the most active corporate backer of
        the standard, which is consistent with its position selling to professional users who need
        documented provenance. The{' '}
        <Link href="/adobe-firefly-image-watermark-detector">Firefly image detector</Link> and{' '}
        <Link href="/adobe-firefly-video-watermark-remover">Firefly video tools</Link> address this
        output.
      </p>
      <h3>Midjourney and Stable Diffusion</h3>
      <p>
        <Link href="/midjourney-image-watermark-remover">Midjourney</Link> has generally not applied
        invisible watermarking to paid output.{' '}
        <Link href="/stable-diffusion-watermark-remover">Stable Diffusion</Link> is open source, and
        because anyone can run it locally with the watermarking step removed from the pipeline, no
        consistent watermarking guarantee exists across Stable Diffusion output. This is a structural
        limitation of watermarking generally: it only binds providers who choose to implement it.
      </p>
      <h3>Video Platforms</h3>
      <p>
        <Link href="/runway-video-watermark-remover">Runway</Link> and{' '}
        <Link href="/heygen-video-watermark-remover">HeyGen</Link> apply visible branding on free tiers as
        a commercial mechanism, removed on paid plans. This is tier differentiation rather than
        provenance, which is why upgrading is both the cleanest and the most straightforward route.
      </p>

      <h2>Video Watermarks: A Harder Problem</h2>
      <p>
        Video introduces complications that do not arise with still images, and the tools work differently
        as a result.
      </p>
      <p>
        <strong>Temporal consistency is the core difficulty.</strong> Removing a mark frame by frame
        produces flickering, because each frame is reconstructed slightly differently and the eye is
        extremely sensitive to inconsistency between consecutive frames. Effective video removal has to
        consider neighbouring frames rather than treating each independently, which is why it is
        computationally heavier and more prone to visible artifacts.
      </p>
      <p>
        <strong>Moving watermarks are substantially harder than static ones.</strong> A logo fixed in a
        corner obscures the same region throughout, so reconstruction has consistent surrounding context.
        A watermark that drifts across the frame obscures different content continuously, and some
        generators move marks deliberately for exactly this reason.
      </p>
      <p>
        <strong>Compression interacts badly with reconstruction.</strong> Video codecs encode most frames
        as differences from neighbours rather than complete pictures. Modifying a region introduces
        changes that propagate through dependent frames, and re-encoding after removal compounds quality
        loss beyond what the same edit costs on a still image.
      </p>
      <p>
        <strong>Outro frames and audio branding are separate.</strong> Some generators append a branded
        end card or audio tag rather than overlaying the video. These are trimmed rather than
        reconstructed, which is simpler and lossless, but they are easy to overlook when checking whether
        an asset is clean. It is worth reviewing the final seconds and listening to the full audio track
        before treating any generated video as unbranded, since a trailing card or a spoken attribution
        can survive an otherwise thorough visual pass.
      </p>

      <h2>Legal and Ethical Constraints</h2>
      <p>
        This is the section worth reading before using any removal tool, because the boundaries here are
        not merely conventional.
      </p>
      <p>
        <strong>Disclosure requirements are law in several jurisdictions.</strong> The EU AI Act includes
        transparency obligations for AI-generated content. China requires labelling of synthetic media.
        Several US states have enacted rules covering political advertising and synthetic likenesses.
        Removing a provenance marker to evade a disclosure requirement is a legal problem, not a technical
        one.
      </p>
      <p>
        <strong>Provider terms govern the output.</strong> Most generators specify in their terms whether
        watermark removal is permitted, and this varies by tool and tier. Removing a mark in breach of
        terms can cost you the license to content you rely on commercially.
      </p>
      <p>
        <strong>Removing someone else&apos;s watermark is a separate matter entirely.</strong> A
        photographer&apos;s or stock library&apos;s watermark marks ownership, and stripping it to use the
        image without a license is copyright infringement. Under US law, removing copyright management
        information carries its own liability under the DMCA independently of the underlying
        infringement.
      </p>
      <p>
        <strong>Platform policies apply on top.</strong> Many platforms require AI content labelling
        regardless of watermarking, and circumventing those systems typically breaches terms of service
        even where no law is engaged.
      </p>
      <p>
        The practical line: removing branding from your own generated output is ordinary. Removing a
        provenance signal so generated content passes as authentic, particularly in news, political,
        evidentiary, or commercial contexts, is the case these rules exist to address. We do not provide
        guidance on defeating invisible watermarking or C2PA signatures.
      </p>

      <h2>Why Image Watermarking Works When Text Detection Does Not</h2>
      <p>
        The contrast between this category and{' '}
        <Link href="/ai-tools/ai-detection-tools">AI text detection</Link> is instructive, and it comes
        down to when the signal is created.
      </p>
      <p>
        Image watermarking is <strong>proactive</strong>. The provider embeds a known signal at generation
        time and can verify it later with certainty. It is deterministic: either the signal is present or
        it is not.
      </p>
      <p>
        Text detection is <strong>retrospective</strong>. Nothing was embedded, so detection must infer
        authorship from statistical properties that correlate imperfectly with it. That is why text
        detectors produce probability scores with substantial error rates while watermark verification
        produces a definite answer.
      </p>
      <p>
        Images also have vastly more capacity to hide a signal. A single photograph contains millions of
        pixels with fine-grained values that can be adjusted imperceptibly. A paragraph of text contains a
        few hundred tokens, and every alteration is potentially visible. There is simply far less room to
        work with.
      </p>

      <h2>Why Provenance Infrastructure Is Being Built</h2>
      <p>
        Watermarking and content credentials are responses to a specific problem: as generated media
        becomes indistinguishable from captured media, the ability to establish where an image came from
        becomes infrastructure rather than a nice-to-have.
      </p>
      <p>
        <strong>The liar&apos;s dividend is the underappreciated half of the problem.</strong> Public
        discussion focuses on fake content being believed, but the corresponding harm is genuine content
        being dismissed. Once audiences know convincing fakes exist, authentic evidence can be waved away
        as fabricated. Provenance infrastructure addresses both directions: it lets real material be
        verified, not just fake material be caught.
      </p>
      <p>
        <strong>Verification at scale requires machine-readable signals.</strong> Human inspection does not
        scale to the volume of media platforms process, and the visual tells people relied on, such as
        malformed hands or inconsistent lighting, have largely disappeared as models improved. Advice
        built around spotting artifacts is now substantially obsolete.
      </p>
      <p>
        <strong>The approach only works if adoption is broad.</strong> A watermarking scheme implemented by
        some providers and not others creates a system where the absence of a signal means nothing, which
        is exactly the asymmetry described earlier. This is why industry consortia rather than individual
        companies are driving C2PA, and why open-source models present a structural gap no standard can
        close.
      </p>
      <p>
        <strong>Provenance is not the same as truth.</strong> A credential establishes that an image came
        from a particular camera or generator and what edits followed. It does not establish that the
        scene depicted is what a caption claims, that the context is accurately described, or that a real
        photograph is not being used misleadingly. Provenance is a necessary foundation, not a complete
        answer.
      </p>

      <h2>Other Signals Beyond Watermarks</h2>
      <p>
        Watermark detection is one input among several when assessing an image, and the others remain
        useful precisely because watermark absence is so uninformative.
      </p>
      <p>
        <strong>EXIF metadata</strong> in camera photographs records device make and model, lens, exposure
        settings, timestamps, and often GPS coordinates. Generated images typically lack this entirely or
        carry only software fields. Its presence is suggestive of capture, though it is trivially editable
        and therefore not proof. The{' '}
        <Link href="/image-metadata-viewer">image metadata viewer</Link> reads it client-side.
      </p>
      <p>
        <strong>Reverse image search</strong> establishes whether an image has appeared before and where,
        which frequently resolves provenance questions faster than any technical analysis. An image
        presented as breaking news that has been circulating for three years is settled without examining
        a single pixel.
      </p>
      <p>
        <strong>Compression and error level analysis</strong> can reveal regions edited after an original
        was saved, since re-encoded areas carry different compression characteristics. This is a
        traditional forensic technique that predates generative models and still applies to composites.
      </p>
      <p>
        <strong>Contextual consistency</strong> remains valuable and is often decisive. Shadows falling in
        inconsistent directions, reflections that do not match, signage in a language wrong for the
        claimed location, or weather inconsistent with the stated date are all checks requiring no tooling.
      </p>
      <p>
        No single signal is sufficient. Verification is the accumulation of consistent evidence, and
        anyone offering a definitive verdict from one automated check is overstating what the technology
        supports.
      </p>

      <h2>Practical Guidance</h2>
      <p>
        <strong>If you are verifying an image&apos;s origin,</strong> check C2PA credentials first since
        they are the most informative when present, then run provider-specific detection. Remember that a
        negative result establishes little, and corroborate with reverse image search and contextual
        checks rather than relying on any single signal.
      </p>
      <p>
        <strong>If you are publishing generated content,</strong> disclose it where required by law,
        platform policy, or the reasonable expectation of your audience. Preserving content credentials
        rather than stripping them is increasingly the professional norm, and it protects you as much as
        your audience.
      </p>
      <p>
        <strong>If you are removing branding from your own output,</strong> check the provider terms for
        your tier, and note that upgrading often removes the mark at source with better quality than any
        reconstruction achieves.
      </p>
      <p>
        <strong>If you are working with client or commercial assets,</strong> confirm the licensing
        position before altering any watermark, and document your rights to the source material. Keeping a
        short written record of where each asset came from and what permissions attach to it costs very
        little at the time and is the only thing that helps if the question is raised months later.
      </p>

      <h2>Related Tool Categories</h2>
      <p>
        For text-based artifacts rather than image watermarks, see the{' '}
        <Link href="/ai-tools/ai-cleanup-tools">AI cleanup tools</Link>, which handle invisible Unicode
        and formatting signals in AI-generated writing. For AI text detection and its limits, see the{' '}
        <Link href="/ai-tools/ai-detection-tools">AI detection tools</Link>. For image utilities including
        metadata inspection, format conversion, and optimization, see the{' '}
        <Link href="/ai-tools/developer-tools">developer tools</Link>. The full{' '}
        <Link href="/ai-tools">tool directory</Link> is searchable.
      </p>
    </>
  );
}

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What are AI watermarks?',
    answer:
      'Three different things that are often confused. Visible watermarks are logos or text overlaid on an image for branding. Invisible watermarks such as SynthID embed a signal in the pixel data itself. Content credentials such as C2PA attach cryptographically signed metadata recording what generated the asset. They have different purposes and very different removability.',
  },
  {
    category: 'General',
    question: 'Are these watermark tools free?',
    answer:
      'Yes. Every tool in this category is free with no account required and no usage limits.',
  },
  {
    category: 'General',
    question: 'Which AI image generators add watermarks?',
    answer:
      'Google applies SynthID across Imagen, Veo, and Gemini image generation. Adobe Firefly applies C2PA content credentials by default. Various tools have used visible marks at different times, and many video generators add a logo or outro on free tiers. Coverage changes as providers update their policies.',
  },
  {
    category: 'Technical',
    question: 'What is SynthID and how does it work?',
    answer:
      'SynthID is Google invisible watermarking technology, embedding a signal directly into pixel data rather than metadata. It is engineered to survive common transformations including resizing, cropping, compression, color adjustment, and screenshotting, since a watermark defeated by saving as JPEG would serve no purpose.',
  },
  {
    category: 'Technical',
    question: 'What are C2PA content credentials?',
    answer:
      'Cryptographically signed metadata recording what generated an asset and what edits followed, backed by Adobe, Microsoft, and others. They are the most informative provenance signal when present, but they live alongside the image rather than inside the pixels, so most social platforms strip them on upload.',
  },
  {
    category: 'Technical',
    question: 'Does screenshotting remove an AI watermark?',
    answer:
      'It removes metadata and content credentials, since those are attached to the file rather than the picture. It does not reliably remove invisible pixel watermarks such as SynthID, which are specifically designed to survive screenshotting, resizing, and recompression.',
  },
  {
    category: 'Technical',
    question: 'Does removing a visible logo remove the invisible watermark too?',
    answer:
      'No, and this is the most consequential misunderstanding in this area. Visible removal reconstructs the obscured region of the picture. Invisible watermarks are distributed across the whole image and persist through that operation, so an image with the logo cleaned may still carry a verifiable generation signal.',
  },
  {
    category: 'Technical',
    question: 'Why is image watermarking more reliable than AI text detection?',
    answer:
      'Because it is proactive rather than retrospective. The provider embeds a known signal at generation time and verifies it later with certainty, so the answer is deterministic. Text detection infers authorship from statistical properties after the fact, which is why it produces probability scores with substantial error rates.',
  },
  {
    category: 'Technical',
    question: 'Why can images hide a watermark when text cannot?',
    answer:
      'Capacity. A single photograph contains millions of pixels whose values can be adjusted imperceptibly, giving enormous room to embed a distributed signal. A paragraph contains a few hundred tokens and every alteration is potentially visible to a reader, so there is far less space to work with.',
  },
  {
    category: 'Detection and Limits',
    question: 'What does it mean if a detector finds no watermark?',
    answer:
      'Very little. It may mean the image is a photograph, or came from a generator applying no watermark, or had its metadata stripped by a platform upload, or uses a scheme the detector cannot read. Absence of evidence is not evidence of absence, and a clean result is not proof of authenticity.',
  },
  {
    category: 'Detection and Limits',
    question: 'How reliable is a positive watermark detection?',
    answer:
      'Strong. If a verifiable watermark or valid signed credential is present, the asset almost certainly came from the tool that applied it. Cryptographic signatures are hard to forge, which makes positive results far more trustworthy than anything statistical text detection produces.',
  },
  {
    category: 'Detection and Limits',
    question: 'Is there a universal AI watermark detector?',
    answer:
      'No. Detection is provider-specific: verifying SynthID requires Google verification path, and reading C2PA credentials requires C2PA-aware tooling. No single tool reliably identifies every scheme, and coverage varies by generator, so a negative result from one detector says nothing about others.',
  },
  {
    category: 'Detection and Limits',
    question: 'How can I verify whether an image is AI-generated?',
    answer:
      'Check C2PA credentials first since they are most informative when present, then run provider-specific detection. Treat a negative result as inconclusive and corroborate with reverse image search and contextual checks. No single signal is sufficient, and confident claims from any one tool should be treated cautiously.',
  },
  {
    category: 'Usage',
    question: 'Is it legal to remove an AI watermark?',
    answer:
      'It depends entirely on which watermark and why. Removing a tool branding logo from output you generated and hold rights to is ordinary practice. Removing a provenance signal to evade a legal disclosure requirement, or stripping a photographer watermark to use their work unlicensed, are different acts with real legal exposure.',
  },
  {
    category: 'Usage',
    question: 'What disclosure laws apply to AI-generated content?',
    answer:
      'The EU AI Act includes transparency obligations for AI-generated content, China requires labelling of synthetic media, and several US states have rules covering political advertising and synthetic likenesses. Removing a provenance marker to evade these is a legal problem rather than a technical one, and requirements continue to expand.',
  },
  {
    category: 'Usage',
    question: 'Can I remove a watermark from someone else image?',
    answer:
      'Removing a photographer or stock library watermark to use an image without a license is copyright infringement. Under US law, removing copyright management information carries separate liability under the DMCA, independently of the underlying infringement. This is a different situation from cleaning branding off your own generated output.',
  },
  {
    category: 'Usage',
    question: 'Do provider terms allow watermark removal?',
    answer:
      'It varies by tool and by tier, and the terms govern. Removing a mark in breach of provider terms can cost you the license to content you may be relying on commercially, which is a bigger risk than the removal itself. Check the specific terms for your plan before altering output.',
  },
  {
    category: 'Usage',
    question: 'Should I disclose that an image is AI-generated?',
    answer:
      'Where law, platform policy, or the reasonable expectation of your audience requires it, yes. Preserving content credentials rather than stripping them is increasingly the professional norm, and it protects you as much as your audience by documenting what you did and did not represent.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Why do content credentials disappear when I upload to social media?',
    answer:
      'Because most platforms strip metadata on upload, usually as a side effect of recompression and privacy processing rather than a deliberate policy against provenance. This is the main practical weakness of metadata-based approaches and the reason pixel-embedded watermarks such as SynthID exist alongside them.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Do watermarks survive format conversion?',
    answer:
      'Metadata and content credentials frequently do not, since many conversion tools discard extended metadata. Invisible pixel watermarks are designed to survive format conversion and recompression, which is precisely the robustness requirement they were engineered against.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Do video watermarks work the same way as image watermarks?',
    answer:
      'Broadly yes, with more surface to work with. Video carries visible logos and outro frames, embedded pixel watermarks applied across frames, and file metadata. SynthID has been extended to video. The extra frames give more capacity for a distributed signal but also more places for a visible mark to appear.',
  },
  {
    category: 'Privacy and Security',
    question: 'Are my images uploaded when I use these tools?',
    answer:
      'Image processing tools that run client-side read the file directly in your browser using the File API, so nothing is transmitted. Where server processing is required, files are not retained after your session. For purely local image inspection including EXIF metadata, the developer tools category includes a client-side metadata viewer.',
  },
  {
    category: 'Privacy and Security',
    question: 'Can an AI watermark identify me personally?',
    answer:
      'Current public watermarking schemes such as SynthID indicate that content was generated by a particular system, not who generated it. That said, image metadata separately can contain device identifiers, GPS coordinates, and timestamps, which is a distinct privacy consideration worth checking before publishing any image.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'Why does watermark removal leave visible artifacts?',
    answer:
      'Because removal reconstructs the region the watermark obscured, inferring what was underneath. Reconstruction works well over uniform areas such as sky or plain backgrounds and degrades over detailed or textured regions where there is more information to invent. Complex backgrounds are where artifacts appear.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'Is upgrading better than removing the watermark?',
    answer:
      'Usually, yes. Paid tiers often remove the mark at generation time, which produces a clean image rather than a reconstruction. Any removal after the fact is inferring pixels that were covered, so the source-level result is better quality and avoids the terms question entirely.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'What is the difference between this category and AI text detection?',
    answer:
      'These tools work on images and video, where watermarking is real, deployed, and cryptographically verifiable. AI text detection infers authorship from statistical properties with no embedded signal, which is why it is far less reliable. The technologies share a name and almost nothing else.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'Should I process an image once or can I run removal repeatedly?',
    answer:
      'Process once, from the highest-quality source you have. Each removal-and-resave cycle adds compression loss on top of reconstruction error, so iterating on an already-processed file compounds the damage. If the first result is unsatisfactory, go back to the original rather than reprocessing the output.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'Why did removal work perfectly on one image and badly on another?',
    answer:
      'Because reconstruction quality depends on what the mark covered. A logo over sky, a plain wall, or a blurred background usually disappears cleanly, since surrounding pixels contain enough information to infer what was underneath. A mark over foliage, patterned fabric, or a face is far harder and often looks smeared.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'Does the size of the watermark affect removal quality?',
    answer:
      'Disproportionately. Difficulty scales with the area being invented rather than linearly with size, because a larger region means less surrounding context relative to what must be reconstructed. A small corner logo and a mark spanning a third of the frame are qualitatively different problems.',
  },
  {
    category: 'Detection and Limits',
    question: 'What is the liar dividend and why does provenance matter for it?',
    answer:
      'It is the harm that runs the other way: once audiences know convincing fakes exist, genuine evidence can be dismissed as fabricated. Provenance infrastructure addresses both directions at once, letting real material be verified rather than only fake material be caught, which is the half of the problem public discussion tends to miss.',
  },
  {
    category: 'Technical',
    question: 'Why is removing a video watermark harder than an image watermark?',
    answer:
      'Temporal consistency. Removing a mark frame by frame produces flickering, because each frame reconstructs slightly differently and the eye is very sensitive to inconsistency between consecutive frames. Video codecs also encode most frames as differences from neighbours, so changes propagate and re-encoding compounds quality loss.',
  },
  {
    category: 'Technical',
    question: 'Why are moving watermarks harder to remove than static ones?',
    answer:
      'A logo fixed in a corner obscures the same region throughout, so reconstruction has consistent surrounding context to work from. A watermark that drifts across the frame obscures different content continuously, giving the reconstruction a new problem each frame. Some generators move marks deliberately for this reason.',
  },
  {
    category: 'Technical',
    question: 'Does Stable Diffusion watermark its output?',
    answer:
      'Not consistently. Because it is open source, anyone can run it locally with the watermarking step removed from the pipeline, so no guarantee exists across Stable Diffusion output. This illustrates a structural limitation of watermarking generally: it only binds providers who choose to implement it.',
  },
  {
    category: 'Detection and Limits',
    question: 'Can I still spot AI images by looking for artifacts like bad hands?',
    answer:
      'Much less reliably than a few years ago. The visual tells people learned to look for, such as malformed hands, garbled text, and inconsistent lighting, have largely disappeared as models improved. Advice built around spotting artifacts is now substantially obsolete, which is precisely why machine-readable provenance signals are being built.',
  },
  {
    category: 'Detection and Limits',
    question: 'What other signals help verify an image besides watermarks?',
    answer:
      'EXIF metadata, which camera photos carry and generated images typically lack. Reverse image search, which often resolves provenance faster than technical analysis. Error level analysis, which reveals regions edited after an original was saved. And contextual consistency: shadows, reflections, signage, and weather that match the claimed circumstances.',
  },
  {
    category: 'Usage',
    question: 'Does a content credential prove an image is truthful?',
    answer:
      'No. A credential establishes that an image came from a particular camera or generator and what edits followed. It does not establish that the scene is what a caption claims, that the context is accurate, or that a genuine photograph is not being used misleadingly. Provenance is a foundation, not a complete answer.',
  },
  {
    category: 'Advanced Workflow',
    question: 'How should newsrooms and researchers verify image provenance?',
    answer:
      'Treat watermark detection as one signal among several. Check C2PA credentials, run provider-specific detection, perform reverse image search, examine EXIF metadata where present, and assess contextual consistency. A negative watermark result is inconclusive, so no single check should carry a verification decision on its own.',
  },
  {
    category: 'Advanced Workflow',
    question: 'What should I check before altering a client or commercial asset?',
    answer:
      'Confirm the licensing position first and document your rights to the source material. Check the generating provider terms for your tier, any platform labelling requirements that apply to where it will be published, and whether disclosure obligations attach in your jurisdiction. Establish this before altering anything, not after.',
  },
];

const content: CategoryContent = {
  intro: <Intro />,
  body: <Body />,
  faqs,
};

export default content;
