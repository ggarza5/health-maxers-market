import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Heart, Brain, Activity, Users, Sparkles, Dumbbell, Apple, Pill, Stethoscope } from "lucide-react";

export default function Home() {
  const healthIssues = [
    { icon: Brain, label: "Anxiety" },
    { icon: Heart, label: "Depression" },
    { icon: Sparkles, label: "Allergies" },
    { icon: Heart, label: "Chronic Illness" },
    { icon: Heart, label: "Chronic Pain" },
    { icon: Brain, label: "Mental/Cognitive Issues" },
    { icon: Users, label: "Fat" },
    { icon: Activity, label: "Arthritis" },
    { icon: Heart, label: "Cholesterol" },
    { icon: Activity, label: "Diabetes" },
    { icon: Stethoscope, label: "Metabolic Dysfunction" },
    { icon: Heart, label: "PTSD" },
  ];

  const trustedBrands = [
    { name: "Mindbloom", logo: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/mcp/get_code/assets/fac9003f-d0a0-4882-9718-9b2fae578849/figma%3Aasset/1882a07fc271def3f09baabaeaf089a0d3408953.svg?AWSAccessKeyId=ASIAQ4GOSFWCZQ4WYZA2&Expires=1759190340&Signature=NW2S2bqSGYq3fBqS613UNayqLAI%3D&response-expires=Mon%2C%2013%20Oct%202025%2023%3A44%3A00%20GMT&x-amz-security-token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIBo3xG1VkHfYwn7tpt0vMgy59gcIHA19HYZ12ZckVwKaAiAEdsGXuLX6swvGQjQj%2BkqxhUBfY6GW8IxhLRJ7TDajnyqQBQjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDA2MDU2Mjc0Njc1NyIMZ8TUT5wW5aQ7%2Fh8EKuQEAYBp0qDPXVFWKErPMeYlO8%2BQm%2BOQlrWwEup8cV94s5BAWLH4F9q%2BShyKEU6zO7HnnT1mKHQOIqZ%2F2B%2B8EcGKAFSJXwPalC%2Bo9e02buHaB9QWbnplmuTjmgjeu6IOZOnz3tPBDJKpxTyPwq%2FwzpEdoIERuYVgqiKbYIYaq3sYyyZfQVCY9v53zdaLOtjLoiURqP8Rh%2BQXr6%2FUrX3qWoYQNDTlU42%2Bsj%2Bs0fLU4VxXmazrEWcsDUOoXGF479hSJJMwzvm7utUMqJo10KoZkd6pOXWuwVHwvK7qo3h0eeEyaOad5F0kQBANWul6SZu4IVt%2BbG%2BMNC2BbfpoHZhXXd%2Fs7wGS6sRu2hUCD88Kmp3UlEpbBgqlqRoYU3gVXC6anLDZlrY%2Ff8x0x55gZFAUtNC7vTZ%2FPkJmwedx6PhH2Nk5ISPBO1AY5IwizMLnEMnmK0bOuPPqirUptcqvPiBpfM%2B%2FtPnl%2F%2Fpl83YDZ9qVVdf2y09%2FkTdS01BK9NTF7xF5bsdTo4PLZgV39MNh6BFiKAU7GiY4bKmaW8Yk6vMTKuTvcVfv%2BLBBKxLCVMpPo1w26ZVdMjjXLuqfqGeO9THDq91O8%2BKk6T8z7jV13jP4RX2xoUeko9ntTpipfxhyFeHG7RolXfPhVvjhuDwEq3rsORTo4xWCHWAsukDpHRpl7Q44%2Fg63W1mYxCAPytKrLupwySLoabSgqlnsziMjcuNMmeQOvqPBMU%2BqKdnW0pJdK%2FHPwttTgznIrIZvW%2FRHKyUhxypXtx9dl20WXwZ0Gd6WbIhomj%2B5jSMKHGL%2BhCIHMdGvPWf9OqfOMICm7MYGOpwBo%2BlM1U0WklJhrX2vPMTPUfkTUv%2BeYX3vAXpx8NsPD1uMr1G2FEYZjYLpNcHPCF2WsxWvsW7saypop5fxW%2B%2BIVqlKvfJsojMpaZzBcZl7h2OvUX1xmeblhtno67SjbExiSJQYZH0hdeHffCFdTsR0gdLFRgiNtYvILMLh83RN1hQmsgvMjppdG9CCQx3VC%2FU571RO%2BdcM9RrX7L2M" },
    { name: "OURA", logo: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/mcp/get_code/assets/fac9003f-d0a0-4882-9718-9b2fae578849/figma%3Aasset/48278e86130c817b3344c09405ddd02961686766.svg?AWSAccessKeyId=ASIAQ4GOSFWCZQ4WYZA2&Expires=1759190340&Signature=8mhs22ak1D7WWJ6SI0urF8aaWyU%3D&response-expires=Mon%2C%2013%20Oct%202025%2023%3A44%3A00%20GMT&x-amz-security-token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIBo3xG1VkHfYwn7tpt0vMgy59gcIHA19HYZ12ZckVwKaAiAEdsGXuLX6swvGQjQj%2BkqxhUBfY6GW8IxhLRJ7TDajnyqQBQjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDA2MDU2Mjc0Njc1NyIMZ8TUT5wW5aQ7%2Fh8EKuQEAYBp0qDPXVFWKErPMeYlO8%2BQm%2BOQlrWwEup8cV94s5BAWLH4F9q%2BShyKEU6zO7HnnT1mKHQOIqZ%2F2B%2B8EcGKAFSJXwPalC%2Bo9e02buHaB9QWbnplmuTjmgjeu6IOZOnz3tPBDJKpxTyPwq%2FwzpEdoIERuYVgqiKbYIYaq3sYyyZfQVCY9v53zdaLOtjLoiURqP8Rh%2BQXr6%2FUrX3qWoYQNDTlU42%2Bsj%2Bs0fLU4VxXmazrEWcsDUOoXGF479hSJJMwzvm7utUMqJo10KoZkd6pOXWuwVHwvK7qo3h0eeEyaOad5F0kQBANWul6SZu4IVt%2BbG%2BMNC2BbfpoHZhXXd%2Fs7wGS6sRu2hUCD88Kmp3UlEpbBgqlqRoYU3gVXC6anLDZlrY%2Ff8x0x55gZFAUtNC7vTZ%2FPkJmwedx6PhH2Nk5ISPBO1AY5IwizMLnEMnmK0bOuPPqirUptcqvPiBpfM%2B%2FtPnl%2F%2Fpl83YDZ9qVVdf2y09%2FkTdS01BK9NTF7xF5bsdTo4PLZgV39MNh6BFiKAU7GiY4bKmaW8Yk6vMTKuTvcVfv%2BLBBKxLCVMpPo1w26ZVdMjjXLuqfqGeO9THDq91O8%2BKk6T8z7jV13jP4RX2xoUeko9ntTpipfxhyFeHG7RolXfPhVvjhuDwEq3rsORTo4xWCHWAsukDpHRpl7Q44%2Fg63W1mYxCAPytKrLupwySLoabSgqlnsziMjcuNMmeQOvqPBMU%2BqKdnW0pJdK%2FHPwttTgznIrIZvW%2FRHKyUhxypXtx9dl20WXwZ0Gd6WbIhomj%2B5jSMKHGL%2BhCIHMdGvPWf9OqfOMICm7MYGOpwBo%2BlM1U0WklJhrX2vPMTPUfkTUv%2BeYX3vAXpx8NsPD1uMr1G2FEYZjYLpNcHPCF2WsxWvsW7saypop5fxW%2B%2BIVqlKvfJsojMpaZzBcZl7h2OvUX1xmeblhtno67SjbExiSJQYZH0hdeHffCFdTsR0gdLFRgiNtYvILMLh83RN1hQmsgvMjppdG9CCQx3VC%2FU571RO%2BdcM9RrX7L2M" },
    { name: "Therabody", logo: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/mcp/get_code/assets/fac9003f-d0a0-4882-9718-9b2fae578849/figma%3Aasset/136905967730e506894b8ef272e521338a5bda87.svg?AWSAccessKeyId=ASIAQ4GOSFWCZQ4WYZA2&Expires=1759190340&Signature=pWQGD7Nhjv29Ckz%2FT0ZbSXAEWnA%3D&response-expires=Mon%2C%2013%20Oct%202025%2023%3A44%3A00%20GMT&x-amz-security-token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIBo3xG1VkHfYwn7tpt0vMgy59gcIHA19HYZ12ZckVwKaAiAEdsGXuLX6swvGQjQj%2BkqxhUBfY6GW8IxhLRJ7TDajnyqQBQjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDA2MDU2Mjc0Njc1NyIMZ8TUT5wW5aQ7%2Fh8EKuQEAYBp0qDPXVFWKErPMeYlO8%2BQm%2BOQlrWwEup8cV94s5BAWLH4F9q%2BShyKEU6zO7HnnT1mKHQOIqZ%2F2B%2B8EcGKAFSJXwPalC%2Bo9e02buHaB9QWbnplmuTjmgjeu6IOZOnz3tPBDJKpxTyPwq%2FwzpEdoIERuYVgqiKbYIYaq3sYyyZfQVCY9v53zdaLOtjLoiURqP8Rh%2BQXr6%2FUrX3qWoYQNDTlU42%2Bsj%2Bs0fLU4VxXmazrEWcsDUOoXGF479hSJJMwzvm7utUMqJo10KoZkd6pOXWuwVHwvK7qo3h0eeEyaOad5F0kQBANWul6SZu4IVt%2BbG%2BMNC2BbfpoHZhXXd%2Fs7wGS6sRu2hUCD88Kmp3UlEpbBgqlqRoYU3gVXC6anLDZlrY%2Ff8x0x55gZFAUtNC7vTZ%2FPkJmwedx6PhH2Nk5ISPBO1AY5IwizMLnEMnmK0bOuPPqirUptcqvPiBpfM%2B%2FtPnl%2F%2Fpl83YDZ9qVVdf2y09%2FkTdS01BK9NTF7xF5bsdTo4PLZgV39MNh6BFiKAU7GiY4bKmaW8Yk6vMTKuTvcVfv%2BLBBKxLCVMpPo1w26ZVdMjjXLuqfqGeO9THDq91O8%2BKk6T8z7jV13jP4RX2xoUeko9ntTpipfxhyFeHG7RolXfPhVvjhuDwEq3rsORTo4xWCHWAsukDpHRpl7Q44%2Fg63W1mYxCAPytKrLupwySLoabSgqlnsziMjcuNMmeQOvqPBMU%2BqKdnW0pJdK%2FHPwttTgznIrIZvW%2FRHKyUhxypXtx9dl20WXwZ0Gd6WbIhomj%2B5jSMKHGL%2BhCIHMdGvPWf9OqfOMICm7MYGOpwBo%2BlM1U0WklJhrX2vPMTPUfkTUv%2BeYX3vAXpx8NsPD1uMr1G2FEYZjYLpNcHPCF2WsxWvsW7saypop5fxW%2B%2BIVqlKvfJsojMpaZzBcZl7h2OvUX1xmeblhtno67SjbExiSJQYZH0hdeHffCFdTsR0gdLFRgiNtYvILMLh83RN1hQmsgvMjppdG9CCQx3VC%2FU571RO%2BdcM9RrX7L2M" },
    { name: "field trip", logo: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/mcp/get_code/assets/fac9003f-d0a0-4882-9718-9b2fae578849/figma%3Aasset/094926332b4f9266ee5da93d6922553c106fdc44.svg?AWSAccessKeyId=ASIAQ4GOSFWCZQ4WYZA2&Expires=1759190340&Signature=TZVK0tEzE0xyYJsndcKrhd%2BSPEA%3D&response-expires=Mon%2C%2013%20Oct%202025%2023%3A44%3A00%20GMT&x-amz-security-token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIBo3xG1VkHfYwn7tpt0vMgy59gcIHA19HYZ12ZckVwKaAiAEdsGXuLX6swvGQjQj%2BkqxhUBfY6GW8IxhLRJ7TDajnyqQBQjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDA2MDU2Mjc0Njc1NyIMZ8TUT5wW5aQ7%2Fh8EKuQEAYBp0qDPXVFWKErPMeYlO8%2BQm%2BOQlrWwEup8cV94s5BAWLH4F9q%2BShyKEU6zO7HnnT1mKHQOIqZ%2F2B%2B8EcGKAFSJXwPalC%2Bo9e02buHaB9QWbnplmuTjmgjeu6IOZOnz3tPBDJKpxTyPwq%2FwzpEdoIERuYVgqiKbYIYaq3sYyyZfQVCY9v53zdaLOtjLoiURqP8Rh%2BQXr6%2FUrX3qWoYQNDTlU42%2Bsj%2Bs0fLU4VxXmazrEWcsDUOoXGF479hSJJMwzvm7utUMqJo10KoZkd6pOXWuwVHwvK7qo3h0eeEyaOad5F0kQBANWul6SZu4IVt%2BbG%2BMNC2BbfpoHZhXXd%2Fs7wGS6sRu2hUCD88Kmp3UlEpbBgqlqRoYU3gVXC6anLDZlrY%2Ff8x0x55gZFAUtNC7vTZ%2FPkJmwedx6PhH2Nk5ISPBO1AY5IwizMLnEMnmK0bOuPPqirUptcqvPiBpfM%2B%2FtPnl%2F%2Fpl83YDZ9qVVdf2y09%2FkTdS01BK9NTF7xF5bsdTo4PLZgV39MNh6BFiKAU7GiY4bKmaW8Yk6vMTKuTvcVfv%2BLBBKxLCVMpPo1w26ZVdMjjXLuqfqGeO9THDq91O8%2BKk6T8z7jV13jP4RX2xoUeko9ntTpipfxhyFeHG7RolXfPhVvjhuDwEq3rsORTo4xWCHWAsukDpHRpl7Q44%2Fg63W1mYxCAPytKrLupwySLoabSgqlnsziMjcuNMmeQOvqPBMU%2BqKdnW0pJdK%2FHPwttTgznIrIZvW%2FRHKyUhxypXtx9dl20WXwZ0Gd6WbIhomj%2B5jSMKHGL%2BhCIHMdGvPWf9OqfOMICm7MYGOpwBo%2BlM1U0WklJhrX2vPMTPUfkTUv%2BeYX3vAXpx8NsPD1uMr1G2FEYZjYLpNcHPCF2WsxWvsW7saypop5fxW%2B%2BIVqlKvfJsojMpaZzBcZl7h2OvUX1xmeblhtno67SjbExiSJQYZH0hdeHffCFdTsR0gdLFRgiNtYvILMLh83RN1hQmsgvMjppdG9CCQx3VC%2FU571RO%2BdcM9RrX7L2M" },
    { name: "APOLLO", logo: "https://s3-alpha-sig.figma.com/img/61fc/8fef/e43eb7694cfcc6f7b5236a15d961b7a7?Expires=1760313600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LcxkMh5LJxfvB2nWlArvjICphdkbW2u9Km2FcvjOAjq96Ivb06AkbTaXAw88cKGJxUXSrgcm3NEKCd1uJBfHliTBZILJO6q0H10YAxrC~pvls0R5W9QiizwHTk3J0UXKkvdl98Eg-KKi8olA~c~dxg9KtABylZ81dLkH4t0wjOoxOB6xn62AfrSus~PiXocLzMWcFH~A6kDo7PGiu18EHzLr4JRrx5CcybOn5eSIj8Qa8yF42X6s7PF5ULYt~1N-CW4LoI7GeQR9GZRE0Bsr2Aog~1FdEgZfsqIrzwCFK6AVz9P6GlpsswQMOmbB6QseKYMyYk-~14RRO0la9iYOJg__" },
  ];

  const serviceCategories = [
    { name: "Psychiatry", image: "https://s3-alpha-sig.figma.com/img/13cb/ac67/8fafb1d19d4d66f38d3af82575edfe30?Expires=1760313600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=E4WHaAykPbhNzyosxh4nLs5PG708HftmY77w7Nr5zUaEh1ngR2jF-ln-DwlmMP4OKHTyMArAw95gPF3m-i3FPDeAiYa7Cg9JoyjYRFa-a75W2G-txdjKat-FQw6RTV5vPgWt9OWnZjhq9YteWnm1ypOIa4gMQipPv2~2k1bdr4nlW9AZVrufX4R95drZCQTCD5p-Vep5o7ZCoNxo4tPRCuuQooCnOMM2xQ3kUE65eaL2lWLxlX15X4Nr6OMIau8eViPd48zWGYBFHEOee4ryZyXtEiJbix0wIclmsnAjNRE2wiWHq8mJ5hkOGEXUFIkvn-HF-4WcgK5eur9HowBQJg__", color: "bg-slate-900" },
    { name: "Psychedelic Therapies", image: "https://s3-alpha-sig.figma.com/img/5893/8812/348e4d5ccbe2505e880c4ac8892ca76a?Expires=1760313600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Jeax35KqthedFQQqLqxl~ukdOfX5Sp8mw2POzyYbZzUoITT2mo3X25K4PQq8FSN~nJzk3Zw62pFJg4RQBDoxtOcP7T4QQY-ORcJQW4a7ufeYaQM6apb6gFcnTqPYoTVZFzGb-hno436jMP-nfRXQj20JDnm09PlkrJV~09goEQH1Hyy-0dmx55Y9eitYz9BowtUpyJ2IGOg-LR5jOGVGl9~sVu-EEZbBFgIi0EnlHalQTJ9i7m6pp~uNtaXbI5-VCk-sgu9TzMS8p93JEz1EEc9gVeNc5iMlhgo4YlvMaqOLO8B2HV6jm5BqbdC~qiOdPlvkhxTKEIfeBBpDgtgbgg__", color: "bg-orange-400" },
    { name: "Metabolic Therapies", image: "https://s3-alpha-sig.figma.com/img/11ef/6f30/5ed558f0e53cc5f5461b30ca77502cf1?Expires=1760313600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UcdR9SF1MzzSBYyCoQRIUvNX3blnQR~6qyW0gYWkI~THLODlZbJ-lm1ICw614NYx5ECZrNNNT7r9mp~jXu84SfrxKJN058DcxWBnlpRaOjkRI1-6vHWDmL~N8wkTUreKZ6yAasyiVrBTmXIE-7Wid-OgNoKBRYNqwyTrcMXzbMyrMzCcNdGmgBOwLfwJEXinLKlirCLS-5hurJkYoo4Q5ZUf9VwhNu82E16s2zl8-wBJ0QrmJCuGj1j~h-mh4WXLZJf3vHc0CsnHC~fGkm8mhz6pQSnkN7HnM2UtED~W4r91cQBRf6uZEBDJIT7j65BAImZivUfdsUJXq5JaIbUR-w__", color: "bg-cyan-600" },
    { name: "Genetics", image: "https://s3-alpha-sig.figma.com/img/3e0e/12d4/e7ab4228c806e3032d055d556f389e57?Expires=1760313600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JTTei4fUJYDL0IeQs3sTOEqhOjaaNx0ITGw0P~AhhJDnJd~Cho48X~OoB~EWN-uIgkGcmFgHZTWT0ifsgyxnj-tloJCepBDrc9Md~PesrX8gG062yqaT5sYS8kpbCBZmAy2Pv~azeqmZtekYioWHJ63Cc35kPVZB2RtrLE02fZS6q5irPIocEAkfXLtPJ-cr10TLQhVTgCfdol57kpQT5gsnTj1OKsKh3N5dvMYYzaQDyl2o9aKRr2f8Ozi92vyVnAKZgLd6gI5vGt6-gbAuGqmSlaoXCICsMWD230YI-EtZjWNVic78wmvRvRkEP13WFWR5VwMnOwes8WgQlhzPZQ__", color: "bg-blue-400" },
  ];

  const productCategories = [
    { name: "Supplements", image: "https://s3-alpha-sig.figma.com/img/a1f3/6a0a/f4d31a3c505ce0609ef5c473f741784c?Expires=1760313600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cHW0nnAsfBviuuPISYwxayedvLf9JfdnqkJQyVhzpV586V7H0DFA8MLZIACeFVYtlW1qBel8TOyvNs0nuUB~LOFhjIdP~RtJwwDtuX1orWypxDFfq2zLenoMTCkT18TjWaW2gnA-GrRqqPZegMupHZ0YgaBQXXT2lXlVid7JVcx41q9Wde0EggPO7NICKuJhcZajJjIYzbN10xcacFI9O~3QHPZ-yakG5XKmE5w0W6wD9GybuGVocUbB1MZLmFnm8N1eiSGbsn7lQYVPVtvSHdptCgxhFiduy5u4SqLDEalfr92uyPH41k4wv3YXYk6~dQJ7YtKzdXub20nwoVeA-g__", color: "bg-purple-900" },
    { name: "Wearables", image: "https://s3-alpha-sig.figma.com/img/fa84/ec4d/e20bd44bc4964caff08f30adb573f739?Expires=1760313600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TPiuFB5jY2ccAEyc8Ots8FJtKmADhJyhdOM8SfrJqbybHRs1w0E4IVg25hmz-1JFwOlGG8~5I381jI4FWNcqEqsxuEg0eC6GX81018nzB49U4DgEMauE3eIemWGO14AWMBm4agaXNQPWhQa3QPFTAMtt7qHL7UYWgVudjEPKFyv8h2xJov5MEbwMcVQMU7eb31LIXX1g5bTVxCzUmPs8pv~DDNq-vJ3Ww00JyihlDRQ6IxYObkWJmTGOGcYC6U-ULPcAQXt5walXBtYMX66bGSDoSbC8WUy5mCsgOPghGo3Cnuq2KIwZPNfj0CSzODYP1VeVZXZenudMacv5mCnN3A__", color: "bg-amber-700" },
    { name: "Nerve Stimulators", image: "https://s3-alpha-sig.figma.com/img/06db/1ecc/3596497ad9a00247980a257dbe361652?Expires=1760313600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QUfK2PKkaaULgyfrvUWCrJSbHYUe5iUHudO1vzGG0-tKjTg1p9Efyvh1uv7x70-cYIZWyrJ0~Ozcx1HTO1UkX6W5BFxMgmFgF9z1k7tFTh54WUWMwzuQNSBC8GeEAiHUb-JysyFIP70~R8smrBzVcJpaLHKtOsjnx23MtDLAUmqmcrOpe6DGvIYS8IDbZJdvAT81kx0--2cBqEcXVVmjH8qWU8rmUenfB44mOK6NPnh~dljFqKCyAA2oXrAVuDrlJD8Yka4xtVSeYrLky7oWdnEVeQx-M-qcn2fhrpvWxfgMSPpw9UlhEIr6ukmlEGZfkpt9VQ-vLerk3mSD-RGCwg__", color: "bg-slate-200" },
    { name: "Massage Devices", image: "https://s3-alpha-sig.figma.com/img/9d64/f284/94b6ae2e85ba32b9786d3bbde1b2ff34?Expires=1760313600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=m~-M0qrEi0PteJIg~Zq8ip3YLDRuSF4n~kx68h2s7~6v9Xij0fvhCzbCR2s6kZdav8vA0b743NLQ6mcYd072JsR~wGcB9b7cnOjVP5FevmNXeWuS6edHOdz4VH0BXAaCz2DJEN9mZ-KDqvo80QrssMr9n0bmOpXnioTO2p2J1hKsIqXmQO9KwBrAcy8kggeTs7SckXMdp5wckQDXlfwB53sOd4NbuVZ3sSnLtvx3fAankFo3ogGINvTtkJscM2QD0oJcuPsjDS3DyzTNPQmmbtqq9EhK5cXAwOsgFVDv-R1UTgfVZqdtKBPE-GwQDDSFhwa2ZDurLBoT9Xs8TgMipA__", color: "bg-green-700" },
    { name: "Software", image: "https://s3-alpha-sig.figma.com/img/3b5c/491b/7bb8baaff3013c96844958b71b2c3a22?Expires=1760313600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=L56ruOEWsFiEyywYiJQStW4sisX1WORuoy5~B0YnnkAtpD-3HW4h9~MYiBPhSYLl-REk~-MoTXYQ9ismDMKlOEysis8JUqhdcV23eSTN~ol3i84jcQBa9SnNBv5iO~tLRNhXkQFKxWMIY89pZu2Z-ai896yR15QiImBV~02ykcIM4rG1IjrLFRgU2vFjDn614GC2lLEeODDR2j0nRpDpwsUxh8c8iyldkiS-Nz7UL7-gzpFJ-OdOYtgfQweQA7eVq2b9jBgDL1hJpFf2okLrtsKRw0p~UD-JkqltHPf67c92MZmlTYJFKOPmW8A~lh5Boym5O8r26RC4GKnVwD~cAQ__", color: "bg-purple-700" },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50/30 via-background to-green-50/30 dark:from-blue-950/20 dark:via-background dark:to-green-950/20 min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-16 pb-20 text-center relative">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-cyan-500 bg-clip-text text-transparent leading-tight">
          Explore America's top healthcare
          <br />
          products & services
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Curated by independent healthcare analysts. Transparent prices.
          <br />
          Honest reviews. Smarter choices for your health.
        </p>

        <div className="flex gap-4 items-center justify-center max-w-2xl mx-auto mb-4">
          <div className="relative flex-1">
            <Input
              placeholder="Share your situation — we'll suggest the best options"
              className="pr-4 h-12 bg-white dark:bg-slate-900"
            />
          </div>
          <Button className="h-12 bg-cyan-600 hover:bg-cyan-700 text-white px-8">
            Search
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          I was feeling xyz fitness, find me best health solutions tailored to your needs
        </p>
      </section>

      {/* Decorative pink blob between sections */}
      <div className="container mx-auto px-4 flex justify-center -my-8 relative z-10">
        <img
          src="https://s3-alpha-sig.figma.com/img/8d02/5e5e/a23582d59e021112f8fb25d00928f838?Expires=1760313600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AVyxQP5njPtdRqkjGDbV0guOfwGqbwAmfJeTaSHWJj29GWZEojohNyb3CSt6le3VgOIjCHp~HExX-Eh87m2xy6zT7U2dVndmhFlYxvWM2n7~xRd6h~xYEclGOt2ywX~Ir6f3rKGC6wwgKBQ2-ci5zrOVMr0aliCNVXCDpVE5vOt4TehvXCpdytC6-oKyW3sHnMBNBVBpdjywRzt~jOG8goO3Odo8vb0Ijdv4W9FHU4cWhhAx-kjr29hhSh37w-NJ2xsXUT6dgXobGkWf7ShuI7Ah3BcAyvtmR-jr~Gd-t3GEf6mFHs7meYpzl8AopwOC2L0sETv4o6x14clreNu1VA__"
          alt=""
          className="w-24 h-28 opacity-60"
        />
      </div>

      {/* Trusted Brands */}
      <section className="container mx-auto px-4 py-12 border-y border-border/40">
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {trustedBrands.map((brand, index) => (
            <img
              key={index}
              src={brand.logo}
              alt={brand.name}
              className={brand.name === "OURA" ? "h-[120px]" : "h-[80px]"}
              style={{ width: 'auto' }}
            />
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-6">
          We've partnered with trusted healthcare brands, so you can find everything in one place
        </p>
      </section>

      {/* Search by Health Issue */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-800 dark:text-slate-200">
          Search by health issue
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-4xl mx-auto">
          {healthIssues.map((issue, index) => (
            <button
              key={index}
              className="flex items-center gap-4 p-6 border-t border-border/40 hover:bg-accent/50 transition-colors group text-left first:border-t md:[&:nth-child(1)]:border-t md:[&:nth-child(2)]:border-t md:[&:nth-child(3)]:border-t"
            >
              <div className="w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                <issue.icon className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              </div>
              <span className="text-base font-medium text-slate-600 dark:text-slate-400">{issue.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* What are you looking for? */}
      <section className="container mx-auto px-4 py-16 relative overflow-hidden">
        <div className="flex items-center justify-center gap-4 mb-12">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-200">
            What are you looking for?
          </h2>
        </div>

        <div className="flex items-center gap-4 justify-center mb-8">
          <Input
            placeholder="What are you looking for?"
            className="max-w-md h-12 bg-white dark:bg-slate-900"
          />
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 h-12">
            Begin search
          </Button>
          <Button variant="outline" size="icon" className="h-12 w-12">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto relative z-10">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white dark:bg-slate-900 rounded-[20px] p-8 border border-[#8d8ab0] dark:border-slate-700 shadow-sm h-[450px] flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl font-bold text-[#6a61c4]">Mindbloom</span>
                <sup className="text-xs text-[#6a61c4]">®</sup>
              </div>

              <h3 className="font-bold text-2xl mb-2 text-[#120c40] dark:text-white">Mindbloom</h3>

              {/* Decorative wavy line */}
              <svg className="mb-6" width="80" height="2" viewBox="0 0 80 2" fill="none">
                <path d="M0 1H80" stroke="#6a61c4" strokeWidth="2"/>
              </svg>

              <p className="text-base text-[#4b5257] dark:text-slate-400 mb-auto leading-6">
                Experience fast, life-changing relief from anxiety, depression, and PTSD with guided at-home ketamine therapy.
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-4 py-1.5 border border-[#6a61c4] text-[#6a61c4] text-base rounded-[5px]">
                  Psychedelic Therapies
                </span>
                <span className="px-4 py-1.5 border border-[#6a61c4] text-[#6a61c4] text-base rounded-[5px]">
                  Best seller
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative gradient blob at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none overflow-hidden">
          <img
            src="https://s3-alpha-sig.figma.com/img/8d02/5e5e/a23582d59e021112f8fb25d00928f838?Expires=1760313600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AVyxQP5njPtdRqkjGDbV0guOfwGqbwAmfJeTaSHWJj29GWZEojohNyb3CSt6le3VgOIjCHp~HExX-Eh87m2xy6zT7U2dVndmhFlYxvWM2n7~xRd6h~xYEclGOt2ywX~Ir6f3rKGC6wwgKBQ2-ci5zrOVMr0aliCNVXCDpVE5vOt4TehvXCpdytC6-oKyW3sHnMBNBVBpdjywRzt~jOG8goO3Odo8vb0Ijdv4W9FHU4cWhhAx-kjr29hhSh37w-NJ2xsXUT6dgXobGkWf7ShuI7Ah3BcAyvtmR-jr~Gd-t3GEf6mFHs7meYpzl8AopwOC2L0sETv4o6x14clreNu1VA__"
            alt=""
            className="w-full h-full object-cover opacity-40"
          />
        </div>
      </section>

      {/* Service Categories */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-800 dark:text-slate-200">
          Service categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {serviceCategories.map((category, index) => (
            <Link
              key={index}
              href="#"
              className="group relative h-48 rounded-2xl overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className={`absolute inset-0 ${category.color} opacity-60`}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white font-bold text-xl z-10">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Product Categories */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-800 dark:text-slate-200">
          Product categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {productCategories.map((category, index) => (
            <Link
              key={index}
              href="#"
              className="group relative h-48 rounded-2xl overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className={`absolute inset-0 ${category.color} opacity-70`}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white font-bold text-lg z-10">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto bg-[#714cfe] rounded-[30px] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-2 leading-tight">Join our newsletter</h2>
            <p className="text-xl md:text-3xl opacity-60 leading-tight">Get more access, discounts & health tips</p>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-auto md:min-w-[427px]">
            <Input
              placeholder="Enter your email"
              className="h-[68px] bg-white text-[#666f73] border-0 rounded-[60px] px-6 text-lg"
            />
            <Button className="h-[68px] bg-[#714cfe] border-2 border-white text-white hover:bg-[#5f3ee0] font-bold text-xl rounded-[60px]">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="container mx-auto px-4 py-16 mb-12">
        <div className="max-w-2xl mx-auto bg-gradient-to-br from-purple-200 to-blue-200 dark:from-purple-900/40 dark:to-blue-900/40 rounded-3xl p-12 text-center relative overflow-hidden">
          <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white relative z-10">
            Start your Health Journey
            <br />
            with confidence
          </h2>
          <p className="text-slate-700 dark:text-slate-300 mb-8 max-w-lg mx-auto relative z-10">
            Max Health Market connects you with America's most effective healthcare solutions. Smarter shopping. Lower costs. Better health.
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 h-12 font-semibold relative z-10">
            Use Me As Health Finder
          </Button>

          {/* Hero image at bottom */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md h-64 overflow-hidden">
            <img
              src="https://s3-alpha-sig.figma.com/img/b96b/c646/3667901fd47b6a26b13b2d361b7f313e?Expires=1760313600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DMeWY4uc1pto4doTi8f0mYOROUd73i53Bb4-hD4WQ2JfB7tntuFWoQNsN5AGt~YQwuKu2-b3-BQY9OIMIr07u9SnV5VOUzGg-Dn508hf1pWExm6X7F2ZtQlhCyxNTXlB5d94hZbNzbe4VY1KH6dTlYk7OCbX6bHkzCTlb2unqAOYymb7sBbbf8AWlea3PpvSY1LP3aZxa8YpY2SHhkUHatpO28HS5f~MlbPFyrC9ZTzj4~oU~GukutOPKTFcd8jUr1qnUzkQ3iKerNXkuqOtCjCm-HqOLcU8X3hBuRfDfBviklBbXHLUalT2YxdZkcsLSceaBF62SxuooUJWrkNHzA__"
              alt="Health journey"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Decorative gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-purple-600 via-blue-500 to-transparent opacity-40 rounded-b-3xl pointer-events-none"></div>
        </div>
      </section>
    </div>
  );
}