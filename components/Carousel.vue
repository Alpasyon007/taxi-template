<template>
	<div class="carousel w-full h-[24rem]">
		<div id="slide1" class="carousel-item relative w-full">
			<img src="/filo.jpg" class="w-full object-cover" />
			<div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
				<div class="card w-96 bg-neutral text-neutral-content">
					<div class="card-body items-center text-center">
						<h2 class="card-title"></h2>
						<p>We are using cookies for no reason.</p>
					</div>
				</div>
			</div>
			<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
				<a href="#slide4" class="btn btn-circle">❮</a>
				<a href="#slide2" class="btn btn-circle">❯</a>
			</div>
		</div>
		<div id="slide2" class="carousel-item relative w-full">
			<img src="/logo.png" class="w-full object-cover" />
			<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
			<a href="#slide1" class="btn btn-circle">❮</a>
			<a href="#slide3" class="btn btn-circle">❯</a>
			</div>
		</div>
		<div id="slide3" class="carousel-item relative w-full">
			<img src="/side.jpg" class="w-full object-cover" />
			<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
			<a href="#slide2" class="btn btn-circle">❮</a>
			<a href="#slide4" class="btn btn-circle">❯</a>
			</div>
		</div>
		<div id="slide4" class="carousel-item relative w-full">
			<img src="/sign.jpg" class="w-full object-cover" />
			<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
			<a href="#slide3" class="btn btn-circle">❮</a>
			<a href="#slide1" class="btn btn-circle">❯</a>
			</div>
		</div>
	</div>
</template>