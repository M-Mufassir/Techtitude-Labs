import { type FormEvent } from "react";
import {
  Mail,
  Phone,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

import TraceBackground from "../components/TraceBackground";
import Reveal from "../components/Reveal";


const contacts = [
  {
    title: "Email",
    value: "techtitude.labs@gmail.com",
    link: "mailto:techtitude.labs@gmail.com",
    icon: Mail,
    description: "For courses, projects & business inquiries",
  },

  {
    title: "WhatsApp",
    value: "+94 71 423 3425",
    link:
      "https://wa.me/94714233425?text=Hello%20Techtitude%20Labs,%20I%20would%20like%20to%20know%20more.",
    icon: MessageCircle,
    description: "Fast communication through WhatsApp",
  },

  {
    title: "Phone",
    value: "+94 76 265 7472",
    link: "tel:+94762657472",
    icon: Phone,
    description: "General inquiries",
  },

  {
    title: "Phone",
    value: "+94 75 745 6106",
    link: "tel:+94757456106",
    icon: Phone,
    description: "Support & communication",
  },

  {
    title: "Phone",
    value: "+94 77 423 3426",
    link: "tel:+94774233426",
    icon: Phone,
    description: "Business contact",
  },
];



export default function Contact() {


  function handleSubmit(e: FormEvent<HTMLFormElement>) {

    e.preventDefault();


    const form = e.currentTarget;

    const data = new FormData(form);


    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");


    const subject = encodeURIComponent(
      `New Inquiry from ${name}`
    );


    const body = encodeURIComponent(
`
Name:
${name}

Email:
${email}

Message:
${message}
`
    );


    window.location.href =
      `mailto:techtitude.labs@gmail.com?subject=${subject}&body=${body}`;

  }



  return (

<div className="relative">


{/* HERO */}

<section className="relative pt-40 pb-16 px-6 overflow-hidden">

<TraceBackground />


<div className="max-w-6xl mx-auto">


<Reveal>

<span className="font-mono text-xs text-accent">
 // contact
</span>


<h1 className="font-display font-bold text-4xl sm:text-6xl mt-3 max-w-3xl">

Let's build something{" "}

<span className="text-gradient">
impactful.
</span>

</h1>


<p className="text-muted text-lg mt-6 max-w-xl">

Have an idea, project, or learning goal?
Connect with Techtitude Labs and let's transform ideas into reality.

</p>


</Reveal>


</div>


</section>





{/* CONTACT SECTION */}


<section className="px-6 pb-28">


<div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-6">



{/* FORM */}


<Reveal className="lg:col-span-3">


<form
onSubmit={handleSubmit}
className="glass rounded-3xl p-8 flex flex-col gap-5"
>



<div>

<label className="font-mono text-xs text-muted">
Name
</label>


<input
name="name"
required
placeholder="Your name"

className="
mt-2
w-full
rounded-xl
bg-elevated/50
border
border-elevated
px-4
py-3
text-sm
outline-none
focus:border-accent/50
transition
"
/>

</div>





<div>


<label className="font-mono text-xs text-muted">
Email
</label>


<input

name="email"

type="email"

required

placeholder="you@example.com"


className="
mt-2
w-full
rounded-xl
bg-elevated/50
border
border-elevated
px-4
py-3
text-sm
outline-none
focus:border-accent/50
transition
"

/>


</div>






<div>


<label className="font-mono text-xs text-muted">
Message
</label>



<textarea

name="message"

rows={6}

required

placeholder="What are you trying to build?"

className="
mt-2
w-full
rounded-xl
bg-elevated/50
border
border-elevated
px-4
py-3
text-sm
outline-none
focus:border-accent/50
resize-none
transition
"

/>


</div>






<button

type="submit"

className="
inline-flex
items-center
justify-center
gap-2
rounded-full
bg-accent
px-7
py-3
font-mono
text-sm
font-medium
text-void
hover:bg-accent-glow
transition-colors
"

>


Send Message

<ArrowUpRight size={16}/>


</button>



<p className="text-xs text-muted font-mono">

&gt; opens your email application automatically

</p>



</form>


</Reveal>








{/* DIRECT CONTACT */}



<Reveal delay={0.15} className="lg:col-span-2">


<div className="glass rounded-3xl p-7 space-y-4">


<div>


<span className="font-mono text-xs text-accent">

// direct_channels

</span>


<h2 className="font-display text-2xl font-bold mt-3">

Connect with us

</h2>


</div>





{contacts.map((contact)=>{


const Icon = contact.icon;



return (

<a

key={contact.value}

href={contact.link}

target={
contact.title==="WhatsApp"
?
"_blank"
:
undefined
}

className="
group
block
rounded-2xl
border
border-elevated
p-4
hover:border-accent/40
transition-all
"


>



<div className="flex gap-3 items-center">



<div

className="
h-10
w-10
rounded-xl
bg-accent/10
flex
items-center
justify-center
text-accent
"

>

<Icon size={18}/>

</div>





<div>


<p className="font-mono text-xs text-muted">

{contact.title}

</p>


<p className="
text-sm
mt-1
group-hover:text-accent
transition
">

{contact.value}

</p>


</div>



</div>




<p className="text-xs text-muted mt-3">

{contact.description}

</p>



</a>


)


})}




</div>


</Reveal>



</div>


</section>




{/* BOTTOM CTA */}


<section className="px-6 pb-24">


<Reveal>


<div
className="
max-w-6xl
mx-auto
glass
rounded-3xl
p-10
text-center
relative
overflow-hidden
"
>


<div
className="
absolute
top-0
left-1/2
-translate-x-1/2
h-40
w-40
bg-accent/20
blur-[80px]
"
/>



<h2 className="relative font-display font-bold text-3xl">

Ready to start your next project?

</h2>


<p className="relative text-muted mt-4">

Let's create technology that makes an impact.

</p>


</div>


</Reveal>


</section>



</div>


  );

}