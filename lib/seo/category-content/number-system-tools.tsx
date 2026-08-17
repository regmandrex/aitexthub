import Link from 'next/link';
import type { CategoryContent } from './types';
import type { FaqItem } from '@/components/faqData';

function Intro() {
  return (
    <>
      <p>
        <strong>Number system tools</strong> convert values between the bases computing actually uses:
        binary, hexadecimal, decimal, and octal. This category currently holds the{' '}
        <Link href="/hex-to-binary">hex to binary converter</Link>, with related conversions available in
        the <Link href="/ai-tools/encoding-tools">encoding tools</Link> and{' '}
        <Link href="/ai-tools/developer-tools">developer tools</Link> categories.
      </p>
      <p>
        Base conversion looks like arithmetic trivia until you hit a problem that requires it. Reading a
        permissions value, working out why a colour renders wrong, interpreting a bitmask in an API
        response, debugging a network mask, or understanding why a floating-point comparison fails all
        come back to how numbers are represented rather than what they equal.
      </p>
      <p>
        This page covers what each base is for, why computing settled on these particular ones, how
        conversion works well enough to do it by hand when you need to, and the practical situations where
        the representation matters more than the value.
      </p>
      <p>
        It goes further than a converter strictly requires, because the conversions themselves are trivial
        and the understanding is where the value is. Knowing that a hex colour is three byte values, that
        a permission code is three sets of three bits, or that a float cannot hold 0.1 exactly turns a
        class of confusing behaviour into predictable behaviour. The sections below cover bases and how
        they relate, bitwise operations, how negative numbers and fractions are represented, and the bugs
        that follow directly from representation choices.
      </p>
    </>
  );
}

function Body() {
  return (
    <>
      <h2>What a Number Base Actually Is</h2>
      <p>
        A base is how many distinct digits a system uses before it needs another column. Decimal uses ten
        digits, zero through nine, and rolls over to a second column at ten. Binary uses two, so it rolls
        over at two. Hexadecimal uses sixteen, borrowing the letters A through F to represent ten through
        fifteen.
      </p>
      <p>
        Each column represents a power of the base. In decimal, 435 means four hundreds plus three tens
        plus five ones, because the columns are ten squared, ten to the first, and ten to the zero. In
        binary, 1011 means one eight plus zero fours plus one two plus one one, which is eleven in
        decimal. The rule is identical; only the base changes.
      </p>
      <p>
        The important consequence is that the value does not change when you convert. Eleven is eleven
        whether written as 11 in decimal, 1011 in binary, or B in hexadecimal. Base conversion changes the
        notation, not the quantity, in exactly the way translating a word between languages changes the
        spelling rather than the meaning.
      </p>

      <h2>Binary: Why Computers Use Two</h2>
      <p>
        Binary underlies everything in computing for a physical reason rather than a mathematical one.
      </p>
      <p>
        Electronic circuits distinguish two states reliably: voltage present or absent, current flowing or
        not. Distinguishing ten distinct voltage levels reliably, across temperature variation, component
        ageing, and electrical noise, is far harder than distinguishing two. A system with two states has
        enormous margin for error, and that tolerance is what makes reliable computation possible at
        scale.
      </p>
      <p>
        The cost is that binary numbers are long. The decimal number 255 is 11111111 in binary. A
        thirty-two bit address is thirty-two characters of ones and zeros, which humans read badly and
        transcribe worse. This is precisely the problem hexadecimal solves.
      </p>
      <p>
        <strong>Bits, bytes, and words.</strong> A bit is a single binary digit. Eight bits make a byte,
        which can represent 256 distinct values, zero through 255. That range is why so many limits in
        computing land on 255: an IPv4 address octet, an RGB colour channel, and the maximum value of an
        unsigned eight-bit integer are all the same constraint.
      </p>

      <h2>Hexadecimal: Binary for Humans</h2>
      <p>
        Hexadecimal exists because of one convenient relationship: sixteen is two to the fourth, so
        exactly four binary digits map to exactly one hex digit, with no remainder and no ambiguity.
      </p>
      <p>
        This makes conversion between binary and hex mechanical rather than arithmetic. Split the binary
        into groups of four from the right, convert each group independently, and concatenate. The binary
        11111111 splits into 1111 and 1111, each of which is F, giving FF. Going the other way is the same
        process reversed. No division, no carrying, no calculation beyond a sixteen-entry lookup you
        eventually memorize.
      </p>
      <p>
        <strong>Every byte is exactly two hex digits.</strong> This is why hexadecimal appears wherever
        raw data is displayed: memory dumps, hashes, MAC addresses, colour values, and binary file
        inspection. A hex string maps one to one onto the underlying bytes, which decimal does not.
      </p>
      <p>
        <strong>Colour values are the most familiar case.</strong> A hex colour such as FF8000 is three
        bytes: FF for red, 80 for green, 00 for blue. Each channel runs zero to 255, so FF is full
        intensity and 00 is none. Once you see it as three separate byte values rather than one six-digit
        code, reading and adjusting colours by hand becomes straightforward.
      </p>
      <p>
        <strong>Prefixes signal the base.</strong> 0x indicates hexadecimal in most programming languages,
        0b indicates binary, and a leading 0 historically indicated octal. That last convention causes
        real bugs, since a value written with a leading zero for alignment can be silently interpreted as
        octal, making 010 into eight rather than ten.
      </p>

      <h2>Octal: The Base That Survived in One Place</h2>
      <p>
        Octal uses eight digits and maps three binary digits to one octal digit, since eight is two cubed.
        It was widely used on early systems with word sizes divisible by three, and it has largely been
        displaced by hexadecimal because bytes divide evenly into hex digits and not into octal ones.
      </p>
      <p>
        It survives prominently in one place: Unix file permissions. A permission value such as 755 is
        three octal digits, one each for owner, group, and others. Each digit encodes three bits, read as
        four for read, two for write, and one for execute. So 7 is read plus write plus execute, 5 is read
        plus execute, and 644 means the owner can read and write while everyone else can only read.
      </p>
      <p>
        This is a case where understanding the base makes the values obvious rather than memorized. Once
        you see 755 as three sets of three bits, you can construct any permission value without looking it
        up. It also explains why certain values appear constantly and others never do: 777 grants
        everything to everyone, 600 keeps a file private to its owner, and any digit above seven is simply
        invalid because three bits cannot exceed seven. That last point catches people out, since a
        permission value containing an eight or a nine is not merely unusual but impossible.
      </p>

      <h2>Converting by Hand</h2>
      <p>
        Worth knowing even with a converter available, because it makes the relationships intuitive.
      </p>
      <p>
        <strong>Binary to hexadecimal:</strong> group the bits in fours from the right, padding the
        leftmost group with zeros if needed, then convert each group. 110110 pads to 00110110, splits into
        0011 and 0110, giving 3 and 6, so 36.
      </p>
      <p>
        <strong>Hexadecimal to binary:</strong> expand each hex digit into its four-bit pattern. A is
        1010, so A7 is 1010 0111.
      </p>
      <p>
        <strong>Decimal to binary:</strong> divide repeatedly by two, recording each remainder, then read
        the remainders bottom to top. Alternatively, subtract the largest power of two that fits and
        repeat, which is often faster mentally.
      </p>
      <p>
        <strong>Binary to decimal:</strong> add the place values where a bit is set. 1011 is eight plus
        two plus one, giving eleven.
      </p>
      <p>
        <strong>The powers worth memorizing</strong> are 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024. Most
        practical conversion becomes arithmetic you can do in your head once these are automatic, and they
        explain most of the otherwise arbitrary-looking numbers in computing.
      </p>

      <h2>Bitwise Operations</h2>
      <p>
        Number systems connect directly to bitwise logic, which operates on individual bits rather than on
        the value as a whole.
      </p>
      <p>
        <strong>AND</strong> yields one only where both inputs are one, which makes it the tool for
        masking: ANDing with a pattern isolates the bits you care about and zeroes the rest. This is
        exactly what a network mask does to an IP address.
      </p>
      <p>
        <strong>OR</strong> yields one where either input is one, which sets bits without disturbing
        others. Combining permission flags uses OR.
      </p>
      <p>
        <strong>XOR</strong> yields one where the inputs differ. Its useful property is being its own
        inverse: applying the same XOR twice returns the original value, which is why it appears in simple
        ciphers, checksums, and swap tricks.
      </p>
      <p>
        <strong>NOT</strong> inverts every bit.
      </p>
      <p>
        <strong>Shifts</strong> move bits left or right. Shifting left by one doubles a value and shifting
        right halves it, which is why shifts historically served as fast multiplication and division by
        powers of two.
      </p>
      <p>
        Bitmasks and flag fields are where this becomes practical. Packing eight boolean options into a
        single byte, then testing individual options with AND, is compact and fast, and it explains why so
        many APIs and configuration formats expose a single integer where you expected a list of settings.
      </p>

      <h2>How Negative Numbers Are Stored</h2>
      <p>
        Binary has no minus sign, so representing negative values requires a convention, and the one
        computing settled on is less obvious than it first appears.
      </p>
      <p>
        <strong>The naive approach fails.</strong> Reserving the leftmost bit as a sign flag, called
        sign-magnitude, seems natural but produces two representations of zero, positive and negative, and
        requires the hardware to check signs before every addition. Both problems are avoidable.
      </p>
      <p>
        <strong>Two&apos;s complement is what is actually used.</strong> A negative number is represented
        by inverting every bit of its positive counterpart and adding one. In eight bits, positive five is
        00000101, so negative five is 11111011. It looks arbitrary until you notice the property that
        motivates it.
      </p>
      <p>
        <strong>Addition just works.</strong> With two&apos;s complement, adding a negative number using
        ordinary binary addition produces the correct result with no special handling. Subtraction becomes
        addition of a negated value, which means the hardware needs one adder rather than separate
        addition and subtraction circuits. That simplification is why the convention won.
      </p>
      <p>
        <strong>The range is asymmetric.</strong> An eight-bit signed value covers negative 128 to
        positive 127, not negative 127 to positive 127. There is one more negative value than positive,
        because zero occupies a slot on the positive side. This asymmetry causes a genuine edge case:
        negating the most negative value overflows, since its positive counterpart does not exist.
      </p>
      <p>
        <strong>The leading bit still indicates sign.</strong> In two&apos;s complement the most
        significant bit is one for negative values and zero for positive, which is why misreading signed
        data as unsigned turns small negatives into very large positives.
      </p>

      <h2>Other Bases Worth Knowing</h2>
      <p>
        Binary, octal, decimal, and hexadecimal cover most computing, but a few others appear in specific
        contexts.
      </p>
      <p>
        <strong>Base64</strong> is not a number base in the arithmetic sense despite the name. It encodes
        binary data as text using sixty-four characters, three bytes becoming four characters, for
        transport through systems that carry text. It is covered in the{' '}
        <Link href="/ai-tools/encoding-tools">encoding tools</Link> category.
      </p>
      <p>
        <strong>Base32</strong> appears where case-insensitivity matters, since it uses only uppercase
        letters and digits. TOTP secrets for two-factor authentication are typically Base32, which is why
        they can be typed without worrying about capitalization.
      </p>
      <p>
        <strong>Base58</strong> removes visually ambiguous characters, excluding zero, uppercase O,
        uppercase I, and lowercase l. It is used for cryptocurrency addresses precisely because those
        strings get transcribed by hand and a misread character is expensive.
      </p>
      <p>
        <strong>Base12 and base60</strong> are historical rather than computational, but they explain
        everyday units. Sixty seconds in a minute and sixty minutes in an hour descend from Babylonian
        sexagesimal, chosen because sixty divides evenly by many numbers. Twelve inches in a foot and
        twenty-four hours in a day come from similar divisibility reasoning.
      </p>
      <p>
        <strong>Unary</strong> is the simplest base, using tally marks where the value equals the number
        of symbols. It is impractical for arithmetic but appears in theoretical computer science, since
        the difference between unary and binary encoding of input changes the complexity analysis of some
        algorithms.
      </p>

      <h2>Where Representation Causes Real Bugs</h2>
      <p>
        Several persistent classes of bug come directly from how numbers are represented.
      </p>
      <p>
        <strong>Integer overflow.</strong> A fixed-width integer wraps when it exceeds its range. An
        eight-bit unsigned value at 255 becomes zero when incremented. This is the mechanism behind the
        2038 problem, where signed thirty-two bit Unix timestamps overflow and wrap to 1901.
      </p>
      <p>
        <strong>Signed versus unsigned interpretation.</strong> The same bits mean different values
        depending on interpretation. A byte of 11111111 is 255 unsigned and negative one in two&apos;s
        complement. Reading data with the wrong assumption produces values that are not merely wrong but
        wrong in a characteristic pattern, with large positive numbers appearing as small negatives.
      </p>
      <p>
        <strong>Floating-point representation.</strong> Numbers such as 0.1 have no exact binary
        representation, in the same way one third has no exact decimal representation. This is why adding
        0.1 and 0.2 does not equal 0.3 exactly in most languages, and why comparing floats for equality is
        unreliable. Currency should be stored in the smallest unit as an integer rather than as a float
        for exactly this reason.
      </p>
      <p>
        <strong>Endianness.</strong> Multi-byte values can be stored with the most significant byte first
        or last, and different architectures and network protocols disagree. Reading data written by a
        system with the opposite convention produces byte-reversed values.
      </p>
      <p>
        <strong>Octal by accident.</strong> A leading zero triggers octal interpretation in some
        languages, so a zero-padded value silently becomes a different number. Codes and identifiers with
        leading zeros are the usual victims.
      </p>

      <h2>How Fractions Are Stored</h2>
      <p>
        Floating point deserves its own treatment, because it is the source of the most surprising
        numeric behaviour in everyday programming.
      </p>
      <p>
        <strong>The format is scientific notation in binary.</strong> A floating-point number stores a
        sign bit, an exponent, and a significand. The value is the significand multiplied by two raised to
        the exponent, which is why the format handles enormous and tiny magnitudes with the same fixed
        number of bits. A 64-bit double allocates one bit to sign, eleven to exponent, and fifty-two to
        significand.
      </p>
      <p>
        <strong>Precision is relative, not absolute.</strong> Because the exponent scales the value, the
        gap between representable numbers grows as the numbers get larger. Near one, consecutive doubles
        are extremely close together. At very large magnitudes, the gap can exceed one entirely, so adding
        one to a sufficiently large float changes nothing at all.
      </p>
      <p>
        <strong>Most decimal fractions have no exact binary form.</strong> A fraction is exactly
        representable in binary only when its denominator is a power of two. One half and one quarter are
        exact; one tenth is not, in the same way one third is not exact in decimal. Every 0.1 in your code
        is an approximation, and arithmetic on approximations accumulates error.
      </p>
      <p>
        <strong>Comparison should use a tolerance.</strong> Testing floats for exact equality is
        unreliable because two calculations that should produce the same value often differ in the last
        bits. Comparing the absolute difference against a small threshold is the standard approach, with
        the threshold chosen relative to the magnitudes involved.
      </p>
      <p>
        <strong>Special values exist.</strong> The format reserves patterns for positive and negative
        infinity and for NaN, meaning not a number, produced by operations like zero divided by zero. NaN
        has the unusual property of not equalling itself, which is occasionally useful for detecting it and
        frequently confusing when encountered unexpectedly.
      </p>
      <p>
        <strong>Use integers or decimals where exactness matters.</strong> Money, counts, and identifiers
        should never be floats. Storing currency in the smallest unit as an integer, or using a decimal
        type where the language provides one, removes an entire class of reconciliation bug.
      </p>

      <h2>Where These Bases Turn Up</h2>
      <p>
        <strong>Colour:</strong> hex codes, RGB channels, and alpha values are all byte-range quantities
        displayed in hexadecimal.
      </p>
      <p>
        <strong>Networking:</strong> IP addresses are four bytes, subnet masks are bit patterns, and CIDR
        notation counts how many leading bits identify the network. Subnetting is binary arithmetic
        wearing decimal clothing.
      </p>
      <p>
        <strong>File permissions:</strong> octal triples encoding read, write, and execute bits.
      </p>
      <p>
        <strong>Hashes and identifiers:</strong> displayed in hexadecimal because it maps cleanly onto the
        underlying bytes.
      </p>
      <p>
        <strong>Character encoding:</strong> Unicode code points are conventionally written in
        hexadecimal, which is why they appear as U+ followed by hex digits.
      </p>
      <p>
        <strong>Memory and low-level debugging:</strong> addresses and memory contents are shown in
        hexadecimal for the same one-to-one byte mapping reason.
      </p>
      <p>
        <strong>Error codes and status flags:</strong> many systems return a single integer packing
        several independent conditions, which only makes sense once converted to binary and read bit by
        bit against the documentation.
      </p>
      <p>
        <strong>Timestamps and durations:</strong> understanding the bit width of a time value tells you
        its range and when it overflows, which is the whole substance of the 2038 problem and of similar
        limits in embedded systems.
      </p>

      <h2>Related Tool Categories</h2>
      <p>
        For text to hex, Base64, and character encoding conversion, see the{' '}
        <Link href="/ai-tools/encoding-tools">encoding tools</Link>. For subnet calculation, hash
        generation, and colour conversion, see the{' '}
        <Link href="/ai-tools/developer-tools">developer tools</Link>. The full{' '}
        <Link href="/ai-tools">tool directory</Link> is searchable.
      </p>
    </>
  );
}

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What is a number base?',
    answer:
      'How many distinct digits a system uses before needing another column. Decimal uses ten, binary uses two, hexadecimal uses sixteen and borrows the letters A through F for ten through fifteen. Each column represents a power of the base, and the rule is identical across all of them.',
  },
  {
    category: 'General',
    question: 'Does converting between bases change the value?',
    answer:
      'No. Eleven is eleven whether written as 11 in decimal, 1011 in binary, or B in hexadecimal. Base conversion changes the notation rather than the quantity, in the same way translating a word between languages changes the spelling rather than the meaning.',
  },
  {
    category: 'General',
    question: 'Are these tools free?',
    answer:
      'Yes, free with no account required and no usage limits. The conversion runs in your browser. Related conversions are available in the encoding tools and developer tools categories.',
  },
  {
    category: 'Technical',
    question: 'Why do computers use binary?',
    answer:
      'For a physical reason rather than a mathematical one. Electronic circuits distinguish two states reliably, such as voltage present or absent, whereas distinguishing ten distinct voltage levels across temperature variation, component ageing, and electrical noise is far harder. Two states give enormous error margin, which is what makes reliable computation possible.',
  },
  {
    category: 'Technical',
    question: 'Why is hexadecimal used instead of binary?',
    answer:
      'Because sixteen is two to the fourth, so exactly four binary digits map to one hex digit with no remainder. That makes conversion mechanical rather than arithmetic, and it means every byte is exactly two hex digits. Binary is unreadable at length; hex carries the same information compactly.',
  },
  {
    category: 'Technical',
    question: 'How do I convert binary to hexadecimal by hand?',
    answer:
      'Group the bits in fours from the right, padding the leftmost group with zeros if needed, then convert each group independently and concatenate. The binary 110110 pads to 00110110, splits into 0011 and 0110, giving 3 and 6, so 36. No division or carrying is involved.',
  },
  {
    category: 'Technical',
    question: 'How do I convert decimal to binary by hand?',
    answer:
      'Divide repeatedly by two, recording each remainder, then read the remainders from bottom to top. Alternatively subtract the largest power of two that fits and repeat, which is often faster mentally once you know the powers 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024.',
  },
  {
    category: 'Technical',
    question: 'Why does 255 appear so often in computing?',
    answer:
      'Because a byte is eight bits and can represent 256 distinct values, zero through 255. An IPv4 address octet, an RGB colour channel, and the maximum unsigned eight-bit integer are all the same underlying constraint expressed in different contexts.',
  },
  {
    category: 'Technical',
    question: 'What does a hex colour code like FF8000 actually mean?',
    answer:
      'Three bytes, one per channel: FF for red, 80 for green, 00 for blue. Each channel runs zero to 255, so FF is full intensity and 00 is none. Reading it as three separate byte values rather than one six-digit code makes adjusting colours by hand straightforward.',
  },
  {
    category: 'Technical',
    question: 'What do Unix file permissions like 755 mean?',
    answer:
      'Three octal digits, one each for owner, group, and others. Each digit encodes three bits: four for read, two for write, one for execute. So 7 is read plus write plus execute, 5 is read plus execute, and 644 means the owner can read and write while everyone else can only read.',
  },
  {
    category: 'Technical',
    question: 'Why is octal still used for file permissions?',
    answer:
      'Because eight is two cubed, so three binary digits map exactly to one octal digit, and permissions are naturally grouped in threes. Octal was displaced by hexadecimal generally because bytes divide evenly into hex digits and not into octal ones, but the permission use case fits octal perfectly.',
  },
  {
    category: 'Technical',
    question: 'What do the 0x and 0b prefixes mean?',
    answer:
      'They declare the base. 0x indicates hexadecimal in most programming languages and 0b indicates binary. A leading zero historically indicated octal, which causes real bugs since a value zero-padded for alignment can be silently read as octal, making 010 into eight rather than ten.',
  },
  {
    category: 'Technical',
    question: 'What are bitwise AND, OR, and XOR used for?',
    answer:
      'AND yields one only where both inputs are one, making it the tool for masking and isolating specific bits, which is what a network mask does. OR sets bits without disturbing others, used for combining flags. XOR yields one where inputs differ and is its own inverse, which is why it appears in checksums and simple ciphers.',
  },
  {
    category: 'Technical',
    question: 'What is a bitmask?',
    answer:
      'A pattern used with bitwise operations to isolate or set specific bits. Packing eight boolean options into a single byte and testing them with AND is compact and fast, which is why many APIs and configuration formats expose a single integer where you might have expected a list of settings.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'Why does 0.1 plus 0.2 not equal 0.3?',
    answer:
      'Because 0.1 has no exact binary representation, in the same way one third has no exact decimal representation. The stored value is very slightly off, and the error compounds. This is why comparing floats for equality is unreliable and why currency should be stored as integers in the smallest unit rather than as floats.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'What is integer overflow?',
    answer:
      'A fixed-width integer wrapping when it exceeds its range, so an eight-bit unsigned value at 255 becomes zero when incremented. This is the mechanism behind the 2038 problem, where signed thirty-two bit Unix timestamps overflow and wrap to a date in 1901.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'Why do my numbers appear as large negatives?',
    answer:
      'You are almost certainly reading unsigned data as signed, or the reverse. The same bits mean different values depending on interpretation: a byte of 11111111 is 255 unsigned and negative one in two-s complement. The wrong assumption produces errors in a characteristic pattern rather than randomly.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'What is endianness and when does it matter?',
    answer:
      'Whether multi-byte values are stored most significant byte first or last. Different architectures and network protocols disagree, so reading data written by a system with the opposite convention produces byte-reversed values. It matters when exchanging binary data between systems or parsing file formats.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: 'Why did my zero-padded number become a different value?',
    answer:
      'A leading zero triggers octal interpretation in some languages, so 010 is read as eight rather than ten. Codes, identifiers, and postcodes padded with leading zeros for alignment are the usual victims, and the failure is silent because the value is valid, just wrong.',
  },
  {
    category: 'Usage',
    question: 'Do I need to learn manual conversion if tools exist?',
    answer:
      'It helps considerably. Understanding the relationships makes the values intuitive rather than opaque, so you can read a permission value or a colour code at a glance and spot when something is wrong. The mechanical binary-to-hex mapping in particular is worth internalizing since it requires no arithmetic.',
  },
  {
    category: 'Usage',
    question: 'Which powers of two should I memorize?',
    answer:
      'At minimum 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, and 1024. Once these are automatic, most practical conversion becomes mental arithmetic, and they explain most of the otherwise arbitrary-looking numbers you encounter in computing, from buffer sizes to address ranges.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Why are hashes and MAC addresses shown in hexadecimal?',
    answer:
      'Because hex maps one to one onto the underlying bytes, with every byte being exactly two hex digits. Decimal has no such clean mapping, so a hex string lets you read the actual data directly rather than a converted representation of it.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Why are Unicode code points written in hexadecimal?',
    answer:
      'Convention, following the same logic as other low-level data display. Code points appear as U+ followed by hex digits, which keeps them compact and aligns with how character encoding tables and byte representations are documented throughout the Unicode standard.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'How does base conversion relate to networking?',
    answer:
      'Directly. IP addresses are four bytes, subnet masks are bit patterns, and CIDR notation counts how many leading bits identify the network. Subnetting is binary arithmetic presented in decimal, which is why subnet calculations feel unintuitive until you look at the underlying bits.',
  },
  {
    category: 'Technical',
    question: 'What is unary and is it ever actually used?',
    answer:
      'The simplest possible base, using tally marks where the value equals the number of symbols. It is impractical for arithmetic but appears in theoretical computer science, because whether an input is encoded in unary or binary changes the complexity analysis of certain algorithms.',
  },
  {
    category: 'Usage',
    question: 'How do I decode an error code that packs several conditions?',
    answer:
      'Convert it to binary and read it bit by bit against the documentation. Many systems return a single integer where each bit represents an independent condition, so a value that looks arbitrary in decimal becomes a clear list of flags once you see which bits are set.',
  },
  {
    category: 'Technical',
    question: 'Why not just use a sign bit for negative numbers?',
    answer:
      'Sign-magnitude seems natural but produces two representations of zero, positive and negative, and requires hardware to check signs before every addition. Two-s complement avoids both problems, which is why it became universal despite looking more arbitrary at first glance.',
  },
  {
    category: 'Technical',
    question: 'What is Base32 used for?',
    answer:
      'Contexts where case-insensitivity matters, since it uses only uppercase letters and digits. TOTP secrets for two-factor authentication are typically Base32, which is why they can be typed or read aloud without anyone worrying about capitalization.',
  },
  {
    category: 'Compatibility and Formats',
    question: 'Which fractions can binary represent exactly?',
    answer:
      'Only those whose denominator is a power of two. One half and one quarter are exact; one tenth is not, in the same way one third is not exact in decimal. Every 0.1 in your code is an approximation, and arithmetic on approximations accumulates error over repeated operations.',
  },
  {
    category: 'Technical',
    question: 'How are negative numbers stored in binary?',
    answer:
      'Using two-s complement: invert every bit of the positive counterpart and add one. In eight bits, positive five is 00000101 so negative five is 11111011. The convention was chosen because ordinary binary addition then produces correct results for negative values, letting hardware use one adder instead of separate circuits.',
  },
  {
    category: 'Technical',
    question: 'Why does a signed byte range from negative 128 to positive 127?',
    answer:
      'Because zero occupies a slot on the positive side, leaving one more negative value than positive. This asymmetry creates a genuine edge case: negating the most negative value overflows, since its positive counterpart does not exist within the range.',
  },
  {
    category: 'Technical',
    question: 'How does floating point actually work?',
    answer:
      'It is scientific notation in binary, storing a sign bit, an exponent, and a significand, with the value being the significand times two to the exponent. A 64-bit double uses one bit for sign, eleven for exponent, and fifty-two for significand, which is how it covers enormous and tiny magnitudes with fixed width.',
  },
  {
    category: 'Technical',
    question: 'Why does floating-point precision vary with magnitude?',
    answer:
      'Because the exponent scales the value, so the gap between representable numbers grows as numbers get larger. Near one, consecutive doubles are extremely close. At very large magnitudes the gap can exceed one entirely, meaning adding one to a sufficiently large float changes nothing.',
  },
  {
    category: 'Technical',
    question: 'What is NaN and why does it not equal itself?',
    answer:
      'NaN means not a number, a reserved pattern produced by operations such as zero divided by zero. It is defined as not equal to anything including itself, which is occasionally useful for detecting it, since a value that fails an equality test against itself must be NaN.',
  },
  {
    category: 'Technical',
    question: 'What is Base58 and why does it exclude certain characters?',
    answer:
      'An encoding that removes visually ambiguous characters, excluding zero, uppercase O, uppercase I, and lowercase l. It is used for cryptocurrency addresses precisely because those strings get transcribed by hand, and a misread character between similar-looking glyphs would be expensive.',
  },
  {
    category: 'Technical',
    question: 'Why are there sixty seconds in a minute?',
    answer:
      'Babylonian sexagesimal, base sixty, chosen because sixty divides evenly by many numbers including two, three, four, five, six, ten, twelve, fifteen, twenty, and thirty. That divisibility made fractions convenient before decimal notation existed, and the convention survived into modern timekeeping.',
  },
  {
    category: 'Usage',
    question: 'How should I compare two floating-point numbers?',
    answer:
      'Compare the absolute difference against a small threshold rather than testing exact equality, choosing the threshold relative to the magnitudes involved. Two calculations that should produce identical values often differ in the last bits, so exact comparison fails unpredictably.',
  },
  {
    category: 'Advanced Workflow',
    question: 'How should I store currency values?',
    answer:
      'As integers in the smallest unit, such as cents or pence, rather than as floating-point numbers. Floats cannot represent most decimal fractions exactly, so arithmetic accumulates small errors that eventually surface as amounts that do not reconcile. Integer storage removes the problem entirely.',
  },
  {
    category: 'Advanced Workflow',
    question: 'How do I read a bitmask value from an API?',
    answer:
      'Convert it to binary and check which bits are set against the documented flag values. Each flag corresponds to a power of two, so a value of 5 means flags 1 and 4 are set. Testing an individual flag means ANDing the value with that flag and checking the result is non-zero.',
  },
  {
    category: 'Advanced Workflow',
    question: 'When should I use shifts instead of multiplication?',
    answer:
      'Rarely in modern code, since compilers optimize multiplication by powers of two automatically and explicit shifts hurt readability. Shifting left doubles and shifting right halves, so they served as fast multiplication historically. Today they are worth using when you are genuinely manipulating bit positions rather than doing arithmetic.',
  },
];

const content: CategoryContent = {
  intro: <Intro />,
  body: <Body />,
  faqs,
};

export default content;
